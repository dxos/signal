# @dxos/signal
> DxOS signal server.

[![Build Status](https://travis-ci.com/dxos/signal.svg?branch=master)](https://travis-ci.com/dxos/signal)
[![Coverage Status](https://coveralls.io/repos/github/dxos/signal/badge.svg?branch=master)](https://coveralls.io/github/dxos/signal?branch=master)
![npm (scoped)](https://img.shields.io/npm/v/@dxos/signal)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/standard/semistandard)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Install

```
$ npm install -g @dxos/signal
```

## Usage

```
$ signal --help

signal [topic]

start a signal server

Options:
  --version       Show version number                                  [boolean]
  --help          Show help                                            [boolean]
  --topic         topic to find other signal servers [string] [default: "#dxos"]
  --port, -p      defines a port to listening                    [default: 4000]
  --repl, -r      start a repl console with your signal                [boolean]
  --logLevel, -l  defines the log level
                   [choices: "debug", "info", "warn", "error"] [default: "info"]
```

```javascript
const { createBroker } = require('@dxos/signal')

const topic = randomBytes(32)

createBroker(topic, opts).start()
```

## API

...

## Contributing

PRs accepted.

## License

GPL-3.0 © dxos

# DxOS Signal Server