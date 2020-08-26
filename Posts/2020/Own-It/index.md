Title: Own the Internet Hackathon
Date: 08/25/2020

## Sia And Namebase Present: ‘Own The Internet’ Hackathon
![Mangos](./_alice-dietrich-FwF_fKj5tBo.jpg)
`(Photo by Alice Dietrich on Unsplash)`

Sia and Namebase recently held a hackathon via
<a href="https://gitcoin.co/" target="new">gitcoin</a>
in which one of the goals was to build an application with
<a href="" target="new">handshake</a>, a decentralized
certificate and naming authority. This is a quick recap of
the project I made for the hackathon. The repo can be found
at
<a href="https://github.com/tobyjaguar/handybot" target="new">handybot</a>.

### Build An Application With Handshake

<a href="https://handshake.org/" target="new">Handshake</a>
is a promising young project, which is now live, that aims to offer an alternative to the  current Domain Name System (<a href="https://en.wikipedia.org/wiki/Domain_Name_System" target="new">DNS</a>). I have been following the project and was interested in its progress. The hackathon presented an opportunity to learn more about the tech stack of the project, and get my hands dirty in trying to make an application that integrated with
the 
<a href="https://handshake.org/" target="new">Handshake</a>
network.

<a href="https://www.namebase.io/" target="new">Namebase</a>, one of the sponsors, offers a platform to manage domains that are registered on the network, and to buy and sell
<a href="https://coinmarketcap.com/currencies/handshake/" target="new">$HNS</a>
(the native token for the 
<a href="https://handshake.org/" target="new">Handshake</a>
 network). In thinking of a compelling application to make for the hackathon, I narrowed focus on the public API
<a href="https://www.namebase.io/" target="new">Namebase</a> has for domain resource information: `/api/v0/dns/domains/:domain`

In having some familiarity with calling APIs, I was hoping that the domain
API offered by
<a href="https://www.namebase.io/" target="new">Namebase</a>
would serve as a public interface for accessing the domain records that
exist on the
<a href="https://handshake.org/" target="new">Handshake</a>
network. One of the compelling use cases of
<a href="https://handshake.org/" target="new">Handshake</a>
is to have access to domain names that are uncensorable and decentralized. This would create a very healthy alternative to the current DNS paradigm. In looking into
<a href="https://handshake.org/" target="new">Handshake</a>
the two immediate things that I was interested in was searching which names
were available to be registered, and what the DNS records were for registered
name.

<a href="https://www.namebase.io/" target="new">Namebase</a> allows for searching, and registering domain names on the
<a href="https://handshake.org/" target="new">Handshake</a>
network, but I didn't see a neat way to see the DNS records of the
previously registered names. So I thought it would be kind of fun to write
a bot that would allow a user to lookup names on the network and see their
DNS records. If a name wasn't registered, the the bot would return a message saying as much. And it looked like
<a href="https://www.namebase.io/" target="new">Namebase</a>
offered a very handy API to do this.

Unfortunately I kept getting an error when I tried to call the domain endpoint:

```js
    data: {
      code: 'REQUEST_NOT_DOMAIN_OWNER',
      message: 'You must own "nb" to access its dns settings.'
    }
```

and it appears as though the caller had to be the owner of
the domain being queried. If only the owner could look up a DNS resource the bot wouldn't be very useful. The project just got more complicated.

I was hoping there would be a public API that essentially offered a bridge
to the
<a href="https://handshake.org/" target="new">Handshake</a>
network, something similar to what
<a href="https://infura.io/" target="new">infura</a>
does for <a href="https://ethereum.org/en/" target="new">Ethereum</a>.
Unfortunately it didn't seems as though there was such a bridge,
and the `domain` enpoint from
<a href="https://www.namebase.io/" target="new">Namebase</a>
wasn't going to provide the information needed for the bot.

I still thought it would be fun to make a bot to look up information on the <a href="https://handshake.org/" target="new">Handshake</a> network, but it was looking like I would have to make a bridge.

After some research into the API documentaion for
<a href="https://github.com/handshake-org/hsd" target="new">hsd</a>
the reference implementation of the 
<a href="https://handshake.org/" target="new">Handshake</a> network, it
looked as though I would need to run a node in conjunction with the bot
service to access network information like DNS records.

A helpful hacker in the
<a href="https://discord.com/invite/V3aTrkp" target="new">Discord</a>
pointed me to an API on the `hsd` node that would be helpful for the
DNS resource, and I had already found the `getnameinfo` API which would provide information for queried names on the network. If this solution were to work, the next phase would be to build the bot, and run it against a local build of the `hsd` daemon.

<a href="https://telegram.org/" target="new">Telegram</a>
bots are very approachable to create, and the available packages
take a lot of headache out of the integration. It is a great platform choice
for bots, as there are many helpful examples and telegram is a widely available app. The
<a href="https://telegram.me/HandyDNS_Bot" target="new">HandyDNS_Bot</a>
was designed to search for names queried by the user, and return the
information from the `hsd` node.

The bot implementation for NodeJS is done by instantiating the `node-telegram-bot-api` package:

```js
const TelegramBot = require('node-telegram-bot-api');
```

and creating a new bot from this:

```js
const bot = new TelegramBot(token, {polling: true});
```

which allows the service to retrieve messages from users sending requests
to the bot from telegram.

Subscribing to the `message` event gives access to the chat id and
text sent from a user:

```js
bot.on('message', async (msg) => {
...
```

The rest of the bot implementation is filtering user commands, and
returning queries from the `hsd` node to the user. The bot
is effectively an interface for `hsd` RPC calls. The available
commands on the bot are:

- /help
- /commands
- /getInfo
- /name:[name]

for example sending `/name:nb` to the bot will return:

```
name: nb

name hash:
b92ad996982b44fbea27d833c52e3fb0d6192d63835a13c61dfeb0126e2ee2ef

owner:
e5392620f0a96cfd3564e05117d07c7cb74e453d2ebf2cb5051704cc21bce98f

state: CLOSED
height: 5044
renewal: 7242
value: 50000000000
registered: true
expired: false
days until expired: 571.3

DNS:
type: GLUE4
ns: ns1.nb.
address: 44.231.6.183

type: NS
ns: ns1.nb.
```

which comes from the `hsd` daemon.

Once all this was working, the last challenge was putting it in a production environment by running it on a cloud server, and making it a
high-availability service.

The bot is implemented with NodeJS and runs on an Ubuntu 18.04 server with
PM2 managing the bot service and the `hsd` daemon. Spinning up a server is
always a bit a time consuming task, unless there is a handy snapshot
available. I did not have anything handy, but knew that a live app is far
more compelling that a github repo, so I spun one up, and began the process
of building a solution for the
<a href="https://telegram.me/HandyDNS_Bot" target="new">HandyDNS_Bot</a>.

I was dreading the task of getting the `hsd` node running on an Ubuntu
server. I have ran many node clients from other blockchain projects, and
the build always presents a challenge. It rarely is easy, and never works on
initial install. I was pleasantly surprised that `hnd` was realtively easy
to get up and running on an Ubuntu machine, as well as how painless it was
to integrate the daemon with a NodeJS service. The bot and `hsd` daemon
talked to eachother seemlessly. The only hiccup in building the
`hsd` node was that the new machine did not have the build-essential
package, in which the build failed due to `make` being unavailable.
Once the build was sorted, everything else was what one would expect
from running NodeJS application services.

The server was spun, iptables configured, updates updated, node installed,
`hsd` built, pm2 installed, code uploaded, and then the services started.
All of that went well, and the bot is live!

![Success](./_guille-alvarez-IcI3FizU9Cw.jpg)
`Photo by Guille Álvarez on Unsplash`


Feel free to try it out at
<a href="https://telegram.me/HandyDNS_Bot" target="new">HandyDNS_Bot</a>
on telegram. I will leave to server up for a bit, but eventually I will
have to spin it down due to the cost of the cloud instance. The project
is up at
<a href="https://github.com/tobyjaguar/handybot" target="new">handybot</a>
if anyone would like to take a look at the implementation.

It was quite fun to dig in and learn a bit more about
<a href="https://handshake.org/" target="new">Handshake</a>. Thanks to
the hackathon organizers for the opporunity to play.

That's it for now.

![Handy](./_handy.png)  


*disclaimer: these musings are offered, at best, as educational, and at worst for entertainment purposes. Do not take action on the descriptions above, as they contain risks, and are not intended as financial advice. Do not do anything above.*
