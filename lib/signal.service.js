//
// Copyright 2020 DxOS.
//

const WebService = require('moleculer-web');

const { SignalServer } = require('./signal-server');

exports.SignalService = {
  name: 'signal',
  mixins: [WebService],
  settings: {
    routes: [{
      mappingPolicy: 'restrict',
      onAfterCall (ctx, route, req, res, data) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        return data;
      },
      aliases: {
        '/': 'api.peers'
      }
    }]
  },
  actions: {
    peers (ctx) {
      const { peerMap } = this.broker.context;

      return {
        channels: peerMap.getTopics().map(topic => ({
          channel: topic.toString('hex'),
          peers: peerMap.getPeers(topic).map(peer => peer.toString('hex'))
        })),
        version: this.broker.metadata.version
      };
    }
  },
  created () {
    this.settings.port = this.broker.metadata.port || 4000;
    this._signal = new SignalServer(this.server, this.broker);
  },
  async started () {
    return this._signal.open();
  },
  async stopped () {
    return this._signal.close();
  }
};