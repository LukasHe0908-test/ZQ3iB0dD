// coreConfigHandler.min.js
const CoreConfigHandler = eval(
  `"use strict";class CoreConfigHandler{generateClientConfigFileByLink(a,b){let c=new parseLinks,d=c.parseLinks(a)[0],e=this.generateClientConfig({InboundSocksPort:b.socksPort,InboundHttpPort:b.httpPort,InboundApiPort:b.apiPort,InboundSocksAddress:b.socksAdress||"127.0.0.1",InboundHttpAddress:b.httpAddress||"127.0.0.1",InboundApiAddress:b.apiAddress||"127.0.0.1",udpEnabled:!0,sniffingEnabled:!1,muxEnabled:!1,OutboundProtocol:d.protocol,OutboundUUID:d.uuid,OutboundRemoteHost:d.remoteHost,OutboundRemotePort:d.remotePort,OutboundStreamType:d.streamType,OutboundEncryption:d.encryption,OutboundAlterId:d.alterId,OutboundStreamSecurity:d.streamSecurity,OutboundPath:d.path,OutboundHost:d.host});return JSON.stringify(e,null,"")}generateServerConfigFileByLink(a,b){let c=new parseLinks,d=c.parseLinks(a)[0],e=this.generateServerConfig({InboundPort:b.port,InboundAddress:b.adress||"127.0.0.1",sniffingEnabled:!1,InboundProtocol:d.protocol,InboundUUID:d.uuid,InboundStreamType:d.streamType,InboundEncryption:d.encryption,InboundAlterId:d.alterId,InboundStreamSecurity:d.streamSecurity,InboundPath:d.path});return JSON.stringify(e,null,"")}generateClientConfig(a){let b={policy:{},log:{},inbounds:{},outbounds:{},stats:{},api:{},routing:{},policy:{system:{statsOutboundUplink:!0,statsOutboundDownlink:!0}},log:{access:"",error:"",loglevel:"warning"},api:{tag:"api",services:["StatsService"]},inbounds:[{tag:"socks",port:a.InboundSocksPort,listen:"127.0.0.1",protocol:"socks",sniffing:{enabled:a.sniffingEnabled,destOverride:["http","tls"]},settings:{auth:"noauth",udp:a.udpEnabled,allowTransparent:!1}},{tag:"http",port:a.InboundHttpPort,listen:"127.0.0.1",protocol:"http",sniffing:{enabled:a.sniffingEnabled,destOverride:["http","tls"]},settings:{auth:"noauth",udp:a.udpEnabled,allowTransparent:!1}},{tag:"api",port:a.InboundApiPort,listen:"127.0.0.1",protocol:"dokodemo-door",settings:{udp:!1,address:"127.0.0.1",allowTransparent:!1}}],outbounds:[{tag:"proxy",protocol:a.OutboundProtocol,settings:{vnext:[{address:a.OutboundRemoteHost,port:a.OutboundRemotePort,users:[{id:a.OutboundUUID,alterId:a.OutboundAlterId,email:"t@t.tt",security:a.OutboundEncryption,encryption:"none"}]}]},streamSettings:{network:a.OutboundStreamType,security:a.OutboundStreamSecurity,tlsSettings:{allowInsecure:!1,serverName:a.OutboundHost},wsSettings:{path:a.OutboundPath,headers:{Host:a.OutboundHost}}},mux:{enabled:a.muxEnabled,concurrency:-1}},{tag:"direct",protocol:"freedom",settings:{}},{tag:"block",protocol:"blackhole",settings:{response:{type:"http"}}}],routing:{domainStrategy:"AsIs",domainMatcher:"mph",rules:[{type:"field",inboundTag:["api"],outboundTag:"api",enabled:!0},{type:"field",outboundTag:"direct",domain:["geosite:cn"],enabled:!0},{type:"field",inboundTag:[],outboundTag:"direct",ip:["geoip:private","geoip:cn"],enabled:!0},{type:"field",port:"0-65535",outboundTag:"proxy",enabled:!0}]}};return b}generateServerConfig(a){let b={policy:{},log:{},inbounds:{},outbounds:{},stats:{},api:{},routing:{},dns:{},log:{access:"",error:"",loglevel:"warning"},api:{tag:"api",services:[]},inbounds:[{port:a.InboundPort,listen:a.InboundAddress,protocol:a.InboundProtocol,settings:{clients:[{id:a.InboundUUID,level:0,email:"t@t.tt"}],decryption:"none"},streamSettings:{network:a.InboundStreamType,security:a.InboundStreamSecurity,wsSettings:{path:a.InboundPath}},sniffing:{enabled:a.sniffingEnabled,destOverride:["http","tls","quic"],metadataOnly:!1}}],dns:{servers:["https+local://8.8.8.8/dns-query"]},outbounds:[{protocol:"freedom",settings:{}},{protocol:"blackhole",settings:{},tag:"blocked"}],routing:{rules:[{inboundTag:["api"],outboundTag:"api",type:"field"},{outboundTag:"blocked",protocol:["bittorrent"],type:"field"}]}};return b}}` +
    ';CoreConfigHandler'
);

let err404 = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page not found</title><style>*{margin:0;padding:0;font-family:sans-serif}body,html{width:100%;height:100%;overflow:auto;color:#000;background-color:#fff;box-sizing:border-box}.container{margin-left:auto;margin-right:auto;--padding:18px;padding-left:var(--padding);padding-right:var(--padding);width:calc(100% - var(--padding) * 2);margin-top:80px;border-radius:8px;transition:all ease .2s,background-color 0s,color 0s}@media (min-width:980px){.container{max-width:978px}}@media (min-width:1200px){.container{max-width:1128px}}@media (max-height:500px){.container{margin-top:18px}}#backHome{display:inline-flex;align-items:center;color:#fff;background-color:#333;border-radius:16px;margin:16px 0 0;padding:16px 32px;transition:all ease .2s,background-color 0s,color 0s;user-select:none}#backHome:hover{transition:all ease .2s;background-color:#2a2a2a}#backHome:active{transition:all ease .2s;background-color:#2a2a2a;transform:scale(.95)}#backHome svg{fill:#fff}.col-2{color:#222}.headline-1{font-size:3em;font-weight:600;margin-bottom:24px}.headline-5{font-size:1em;font-weight:600;margin-bottom:0}</style></head><body><div class="container"><div><h1 class="headline-1 col-2">Page not found</h1><h5 class="headline-5 col-2">Sorry, we can't find the page you are looking for in this download server.</h5></div><div id="backHome">Back Home</div></div></body><script>document.querySelector('#backHome').addEventListener('click', () => { location.pathname = "/" });</script></html>`;

import express from 'express';
import fs from 'fs';
import path from 'path';
import cp from 'child_process';
import http from 'http';
import https from 'https';
import stream from 'stream';
import httpProxyMiddleware from 'http-proxy-middleware';
const app = express();
const config = {
  core_path: process.env.X_CORE_PATH || './core',
  port: process.env.X_PORT || 3000,
  uuid: process.env.X_UUID || guid(),
  path: process.env.X_PATH || '/api',
  use_argo: process.env.X_ARGO || false,
  argo_path: process.env.X_ARGO_PATH || './cloudflared',
  argo_protocol: process.env.X_ARGO_PROTOCOL || '',
  argo_region: process.env.X_ARGO_REGION || '',
  argo_access_token: process.env.X_ARGO_TOKEN || '',
};

function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

app.get('/generate_204', (req, res) => {
  res.status(204).send('');
});

const wsProxy = httpProxyMiddleware.createProxyMiddleware({
  target: 'http://127.0.0.1:9000/',
  changeOrigin: true,
  ws: true,
  logLevel: 'silent', // 禁用所有日志输出
});
app.use(config.path, wsProxy);
// 404 page
app.use((req, res, next) => {
  res.status(404).send(err404);
});

// 下载核心
function download_core() {
  return new Promise(async resolve => {
    let url = 'https://tt.vg/DrLSV';
    try {
      const res = await (
        await fetch(url, {
          redirect: 'follow',
        })
      ).arrayBuffer();
      fs.writeFileSync(path.resolve(config.core_path), Buffer.from(res));
      resolve(true);
    } catch (err) {
      console.log(err);
      resolve(false);
    }
  });
}
// 启动核心
async function start_core() {
  // 生成配置文件
  let config_obj = new CoreConfigHandler().generateServerConfig({
    InboundPort: 9000,
    InboundAddress: '127.0.0.1',
    sniffingEnabled: false,
    InboundProtocol: Buffer.from('dmxlc3M=', 'base64').toString(),
    InboundUUID: config.uuid,
    InboundStreamType: 'ws',
    InboundEncryption: 'auto',
    InboundAlterId: 0,
    InboundStreamSecurity: 'none',
    InboundPath: config.path,
  });
  config_obj = JSON.stringify(config_obj, null, '');

  await (_ => {
    return new Promise(async resolve => {
      let args = ['+x', path.resolve(config.core_path)];
      let process = cp.spawn('chmod', args);
      process.on('close', () => {
        console.log('[初始化]', 'core chmod完成');
        setTimeout(_ => resolve(), 100);
      });
    });
  })();
  let process = cp.spawn(path.resolve(config.core_path), ['-c', 'stdin:']);
  let stdInStream = new stream.Readable();
  stdInStream.push(config_obj);
  stdInStream.push(null);
  stdInStream.pipe(process.stdin);
  return new Promise(resolve => {
    process.stdout.on('data', data => {
      // console.log(data.toString().trim());
      if (/[0-9/]* [0-9:]* \[Warning\] core: .* started/.test(data)) {
        console.log(`----------
  [Config]
  path: ${config.path}
  uuid: ${config.uuid}
  ----------`);
        resolve('[初始化] core启动成功');
      }
    });
    process.on('error', err => {
      resolve('[初始化] core启动错误：' + err);
    });
  });
}

// 下载argo
function download_argo() {
  return new Promise(async resolve => {
    let url =
      'https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64';
    try {
      const res = await (
        await fetch(url, {
          redirect: 'follow',
        })
      ).arrayBuffer();
      fs.writeFileSync(path.resolve(config.argo_path), Buffer.from(res));
      resolve(true);
    } catch (err) {
      console.log(err);
      resolve(false);
    }
  });
}
// 启动argo
async function start_argo() {
  await (_ => {
    return new Promise(async resolve => {
      let args = ['+x', path.resolve(config.argo_path)];
      let process = cp.spawn('chmod', args);
      process.on('close', () => {
        console.log('[初始化]', 'argo chmod完成');
        setTimeout(_ => resolve(), 100);
      });
    });
  })();

  let args = ['--url', `http://localhost:${config.port}`];
  if (config.argo_access_token) {
    args = ['run', '--token', config.argo_access_token];
    console.log('[Argo Config]', 'domain: Custom Token');
  }
  if (config.argo_protocol) {
    args.push('--protocol', config.argo_protocol);
  }
  if (config.argo_region) {
    args.push('--region', config.argo_region);
  }
  let process = cp.spawn(path.resolve(config.argo_path), [
    'tunnel',
    '--no-autoupdate',
    ...args,
  ]);
  return new Promise(resolve => {
    process.stderr.on('data', data => {
      // https://.*[a-z]+cloudflare.com
      if (/Registered tunnel connection/.test(data)) {
        console.log(
          '[Argo Info]',
          data
            .toString()
            .match(/(?<=Registered tunnel connection).*/)[0]
            .trim()
        );
      } else if (
        !config.argo_access_token &&
        /https:\/\/.*[a-z]+cloudflare.com/.test(data)
      ) {
        console.log(
          '[Argo Config]',
          `domain: ${
            data.toString().match(/(?<=https:\/\/).*[a-z]+cloudflare.com/)[0]
          }`
        );
      } else {
        console.log(data.toString().trim());
      }
      resolve('[初始化] argo启动成功');
    });
    process.on('error', err => {
      resolve('[初始化] argo启动错误：' + err);
    });
  });
}

// 监听端口
function listen_port() {
  let serverProxy = http.createServer(app);
  serverProxy.listen(config.port, () => {
    console.log('[软件]', `Listening on port ${config.port}`);
  });
  serverProxy.on('upgrade', wsProxy.upgrade);
}

(async _ => {
  // console.log(await start_argo());
})();
start();
async function start() {
  if (config.use_argo) {
    if (!fs.existsSync(path.resolve(config.argo_path))) {
      const foo = await download_argo();
      if (foo) {
        console.log('[初始化]', 'argo下载成功');
      } else {
        console.log('[初始化]', 'argo下载失败');
      }
    }else {
      console.log('[初始化]', 'argo已存在');
    }
    console.log(await start_argo());
  }

  if (!fs.existsSync(path.resolve(config.core_path))) {
    const foo = await download_core();
    if (foo) {
      console.log('[初始化]', 'core下载成功');
    } else {
      console.log('[初始化]', 'core下载失败');
    }
  } else {
    console.log('[初始化]', 'core已存在');
  }
  console.log(await start_core());
  listen_port();
}

function keepalive(mode) {
  // 保持唤醒
  let url_host = '';
  switch (mode) {
    case 'custom':
      url_host = process.env.X_DOMAIN;
      break;
    case 'render':
      url_host = process.env.RENDER_EXTERNAL_HOSTNAME;
      break;
    case 'replit':
      url_host =
        process.env.REPL_SLUG + '.' + process.env.REPL_OWNER + '.repl.co';
      break;
    case 'codesandbox':
      url_host = process.env.CODESANDBOX_HOST.replace('$PORT', '3000');
      break;
    case '':
      break;
    default:
      return;
      break;
  }
  https
    .get(`https://${url_host}/generate_204`, res => {
      if (res.statusCode == 204) {
      } else {
        console.log('请求错误: ' + res.statusCode);
      }
    })
    .on('error', err => {
      console.log('请求错误: ' + err);
    });
}
if (process.env.KEEP_CLOSE) {
} else if (process.env.KEEP_DOMAIN) {
  setInterval(() => keepalive('custom'), 3 * 60 * 1000);
} else if (process.env.RENDER_EXTERNAL_HOSTNAME) {
  setInterval(() => keepalive('render'), 3 * 60 * 1000);
} else if (process.env.REPL_SLUG && process.env.REPL_OWNER) {
  setInterval(() => keepalive('replit'), 3 * 60 * 1000);
} else if (process.env.CODESANDBOX_HOST) {
  setInterval(() => keepalive('codesandbox'), 3 * 60 * 1000);
}
