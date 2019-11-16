# オレオレ証明書

```
$ openssl genrsa 2048 > mysslserver.key
$ openssl req -new -key mysslserver.key > mysslserver.csr
$ openssl pkcs12 -export -inkey mysslserver.key -in mysslserver.crt > mysslserver.pfx
```
