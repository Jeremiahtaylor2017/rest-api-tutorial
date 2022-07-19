import dotenv from 'dotenv';
dotenv.config();

export default {
    port: 1337,
    dbUri: process.env.dbUri,
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
    publickey: `-----BEGIN RSA PUBLIC KEY-----
MIICCgKCAgEAvzQpxbsTmUtJhLiTKXORZu15KPnDGspdPo9rmrZhwxMg9XpKWjKT
wfuoVtCoRCFeBuS3r1uwt3JJFNbcOTZ2x6zMN8rHZDx0MNWoj/2NTqcXMc5ZdPib
HAGgQTxDTwWUgyawZkTKBzlJgg6xJA6zWwNVl/+qxF+ibsHnx0rO+t7ZhGJyj/Nj
ShAUJeaybNwElRn20torFzkJiOyam7HdRo7zSezJnDAo/TodnynJsGRWC9z1kU/S
bNw7z3ugEFDm6A/YxXuxe7hJ6PMVTYor/PSEs9Sl32yqJWUFk92uyraPiwaLhEov
o3HifRKMVFpwhcRCPuKZKKI4W+ioqYN7gf8OOxNV3oel+yOvvcZL/HEH2cBv7GEh
Y1Ua6K/GLhcYc6jx6Op267KkDl9MZz8U9R+37/B7qvMu56a3pe7Fqu/w89oHyuGK
sbhXSQhZaVlQy6fceN0wbhcFdcAyQowNK/3xlB4Wklg6Ew6AaufJwFYGegGCMzKP
wEdVdnihHJNNQiULI/B2GolPK1teVbfJM5nlEN6g89Xs+i6Xd3QnDKSjZ1qGj0r5
DJGE7+hOSuncXfjjkhauq3Oc4i27C5s9IxxuW/XaIo1c9n8jMEez7xrvdl2LiKVW
Eaxk4QkQ4rZhC78omfq5UaMC2S9cWjcrSyUzKoaRsIXJ/SuJ/xOvYLECAwEAAQ==
-----END RSA PUBLIC KEY-----`,
    privatekey: `${process.env.privateKey}`
}