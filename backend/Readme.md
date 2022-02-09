# Backend

Denne backenden er bygget på Postgres, Prisma og Express.

## Hvordan starte den

1. Installer alle modulene hvis ikke allerede installert
```
yarn install 
```
2. Start databasen
```
docker-compose up -d
```
3. Sette opp databasen
```
yarn prisma migrate dev
yarn prisma db seed
```

4. start serveren
```
yarn run dev
```

## Hvordan teste den

kjør dette
```
yarn run test
```