import { Context } from '../../context';
import { RatingRequest, RestResponse } from '../../types';

export const rateUserHelper = async (request: RatingRequest, ctx: Context): Promise<RestResponse> => {
  if (request.rating < 1 || request.rating > 5) {
    return new Promise((resolve) => {
      resolve({ code: 400, message: 'Rating was not formatted correctly' });
    });
  }

  if (request.givenById === request.gottenById) {
    return new Promise((resolve) => {
      resolve({ code: 400, message: 'Cannot rate yourself' });
    });
  }

  const existingRating = await ctx.prisma.rating.findFirst({
    where: {
      givenById: request.givenById,
      gottenById: request.gottenById,
    },
  }).catch((error: any) => {
    console.error(error);
    return { code: 400, message: `something went wrong: ${error}` };
  });

  
}