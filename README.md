# test_js_proto
This repo is show how to generate protobuf in js :)

## Script
There are two types of scripts. They are the same.
```
"proto": "npx pbjs -t json ./protos/*.proto > ./protos/proto.json && pbjs -t json-module -w commonjs ./protos/*.proto > ./protos/proto.js",
```
```
"proto-o": "npx pbjs -t json -o ./protos/proto.json ./protos/*.proto && pbjs -t json-module -w commonjs -o ./protos/proto.js ./protos/*.proto"
```

### Documents
- [protobufjs](https://www.npmjs.com/package/protobufjs)
- [Google Dev](https://developers.google.com/protocol-buffers)
