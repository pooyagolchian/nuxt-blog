__NUXT_JSONP__("/blog/aws-ecr-pull-and-extract", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi){return {data:[{article:{slug:"aws-ecr-pull-and-extract",description:"Useful tips for AWS to pull docker image and, access all content in it.",title:"How to pull the AWS ECR docker image and extract all things in the docker image?",date:"2021-04-21",author:{name:X,bio:Y,img:Z},toc:[{id:Q,depth:M,text:R},{id:ao,depth:M,text:ap},{id:aq,depth:M,text:ar},{id:as,depth:M,text:at}],body:{type:_,children:[{type:b,tag:N,props:{id:Q},children:[{type:b,tag:v,props:{ariaHidden:w,href:au,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:R}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"Maybe you faced the problem that you have been needed the old docker file in the ECR repository.\nI solved this problem with the docker command to pull and extract the docker image and access all I need."}]},{type:a,value:e},{type:b,tag:N,props:{id:ao},children:[{type:b,tag:v,props:{ariaHidden:w,href:"#pulling-docker-image-file",tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:ap}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"You can use the below command to pull the docker image that you push in the ECR repository:"}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[C,t]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"docker pull YOUR_DOCKER_IMAGE_URL\n"}]}]}]},{type:a,value:e},{type:b,tag:N,props:{id:aq},children:[{type:b,tag:v,props:{ariaHidden:w,href:"#run-your-desire-command-in-docker-image",tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:ar}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"You can run and execute a command in your docker image:"}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[C,t]},children:[{type:b,tag:l,props:{},children:[{type:a,value:av},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:"\u002Fbin\u002Fbash YOUR_DOCKER_IMAGE_URL\n"}]}]}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"For example:"}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[C,t]},children:[{type:b,tag:l,props:{},children:[{type:a,value:av},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:"\u002Fbin\u002Fbash YOUR_DOCKER_IMAGE_URL "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"ls"}]},{type:a,value:" -la\n"}]}]}]},{type:a,value:e},{type:b,tag:N,props:{id:as},children:[{type:b,tag:v,props:{ariaHidden:w,href:"#extract-docker-image-and-searching-in-the-files",tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:at}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[C,t]},children:[{type:b,tag:l,props:{},children:[{type:a,value:" docker image save YOUR_DOCKER_IMAGE_URL "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u003E"}]},{type:a,value:" img.tar\n"}]}]}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"After that, you extract the docker image and find your target files:"}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[C,t]},children:[{type:b,tag:l,props:{},children:[{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:$}]},{type:a,value:" -xvf img.tar\n"}]}]}]}]},dir:aa,path:"\u002Farticles\u002Faws-ecr-pull-and-extract",extension:ab,createdAt:K,updatedAt:K},prev:{slug:"arangodb-devops",description:aw,title:"Arangodb install last version and configuration and backup and restore from Amazon AWS",date:"2020-07-22",author:{name:X,bio:Y,img:Z},toc:[{id:Q,depth:L,text:R},{id:ax,depth:L,text:ay},{id:az,depth:L,text:aA},{id:aB,depth:L,text:aC},{id:aD,depth:L,text:aE}],body:{type:_,children:[{type:b,tag:O,props:{id:Q},children:[{type:b,tag:v,props:{ariaHidden:w,href:au,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:R}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:aw}]},{type:a,value:e},{type:b,tag:O,props:{id:ax},children:[{type:b,tag:v,props:{ariaHidden:w,href:"#install-last-verison-of-arangodb-on-ubuntu-1804",tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:ay}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"For installation, you should visit the Arango website to check the last version of this database.\nNow the last version is "},{type:b,tag:l,props:{},children:[{type:a,value:"3.6.5-1"}]},{type:a,value:".\nFor installing this version and configuration web interface run the below sh file on your server,\nin this example, I'm testing this script on the AWS EC2 server."}]},{type:a,value:e},{type:b,tag:"h4",props:{id:"warning"},children:[{type:b,tag:v,props:{ariaHidden:w,href:"#warning",tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:"WARNING!"}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"You should stop arangodb3 and turn your application into maintenance mode!"}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,C]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,ac,ad]},children:[{type:a,value:"#!\u002Fbin\u002Fbash"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:" systemctl stop arangodb3.service\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ae}]},{type:a,value:" \u002Fetc\u002Farangodb3\u002F ~\u002Farango-config-backup\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"curl"}]},{type:a,value:" -OL https:\u002F\u002Fdownload.arangodb.com\u002Farangodb36\u002FDEBIAN\u002FRelease.key\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:" apt-key "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"add"}]},{type:a,value:" - "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\u003C"}]},{type:a,value:" Release.key\n"},{type:b,tag:c,props:{className:[d,A,B]},children:[{type:a,value:H}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'deb https:\u002F\u002Fdownload.arangodb.com\u002Farangodb36\u002FDEBIAN\u002F \u002F'"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"|"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"tee"}]},{type:a,value:" \u002Fetc\u002Fapt\u002Fsources.list.d\u002Farangodb.list\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:af}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aF}]},{type:a,value:" apt-transport-https\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:af}]},{type:a,value:" update\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:af}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aF}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:"arangodb3"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"3.6"}]},{type:a,value:".5-1\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ag}]},{type:a,value:aG},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ag}]},{type:a,value:" \u002Fetc\u002Farangodb3\u002Farangosh.conf\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ag}]},{type:a,value:" \u002Fetc\u002Farangodb3\u002Ffoxx-manager.conf\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"s\u002F#queues = true\u002Fqueues = true\u002Fg\""}]},{type:a,value:aG},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:" systemctl "},{type:b,tag:c,props:{className:[d,A,B]},children:[{type:a,value:"enable"}]},{type:a,value:" arangodb3.service\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:" systemctl start arangodb3.service\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:" systemctl status arangodb3.service\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:" sysctl -w "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"vm.max_map_count=1024000\""}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:O,props:{id:az},children:[{type:b,tag:v,props:{ariaHidden:w,href:"#arangodb-backup-and-upload-to-s3",tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:aA}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,C]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,ac,ad]},children:[{type:a,value:aH}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:"NOWDATE"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aI}]},{type:a,value:" +%Y-%m-%d"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:U}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:"LASTDATE"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"$("}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aI}]},{type:a,value:" +%Y-%m-%d --date"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"'1 week ago'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:")"}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aK}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:aL}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"Your bucketname in S3\""}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:aM}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aN}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:aO}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:F}]},{type:a,value:aP},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:V},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:ah}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:G}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:aQ}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,A,B]},children:[{type:a,value:H}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aR},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:aS}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:aT}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,A,B]},children:[{type:a,value:H}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aU},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:aV}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"mkdir"}]},{type:a,value:" -p \u002Fhome\u002Fubuntu\u002Fbackup\u002F$DIRNAME"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:U}]}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,A,B]},children:[{type:a,value:H}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"FOLDER "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:" CREATED!\""}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:aW}]},{type:a,value:"\narangodump --server.endpoint tcp:\u002F\u002F127.0.0.1:8529 --server.username root --server.password "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aX}]},{type:a,value:aY},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:D}]},{type:a,value:" --output-directory "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:V},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:"\u002F\""}]},{type:a,value:" --compress-output --overwrite "},{type:b,tag:c,props:{className:[d,"boolean"]},children:[{type:a,value:w}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:$}]},{type:a,value:" -czvf \u002Fhome\u002Fubuntu\u002Fbackup\u002F"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ai}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:D}]},{type:a,value:aZ},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,A,B]},children:[{type:a,value:"."}]},{type:a,value:a_},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ae}]},{type:a,value:" \u002Fhome\u002Fubuntu\u002Fbackup\u002F"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ai}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:D}]},{type:a,value:"-backup.tar.gz  s3:\u002F\u002F"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aj}]},{type:a,value:"\u002Fdbbackup\u002F\naws s3 "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:a,value:" s3:\u002F\u002F"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aj}]},{type:a,value:a$},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"$LASTDATE"}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:D}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:a,value:ba},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ai}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:D}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:a,value:bb},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:bc}]}]}]},{type:a,value:e},{type:b,tag:O,props:{id:aB},children:[{type:b,tag:v,props:{ariaHidden:w,href:"#arangodb-restore-and-download-from-s3",tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:aC}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,C]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,ac,ad]},children:[{type:a,value:aH}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aK}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:aL}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"Your bucket name in S3\""}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:aM}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aN}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,A,B]},children:[{type:a,value:H}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"Please enter file date (ONLY DATE LIKE 2020-07-16):\""}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,A,B]},children:[{type:a,value:"read"}]},{type:a,value:" FILE_NAME\n"},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:aO}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:F}]},{type:a,value:aP},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:V},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:ah}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:G}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:aQ}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,A,B]},children:[{type:a,value:H}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aR},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:aS}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:aT}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,A,B]},children:[{type:a,value:H}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aU},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:aV}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,A,B]},children:[{type:a,value:"exit"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"Please backup database with shell script\""}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:aW}]},{type:a,value:a_},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ae}]},{type:a,value:"  s3:\u002F\u002F"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aj}]},{type:a,value:a$},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:al}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:D}]},{type:a,value:"-backup.tar.gz  \u002Fhome\u002Fubuntu\u002Fbackup\u002F\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:$}]},{type:a,value:" -xzvf \u002Fhome\u002Fubuntu\u002Fbackup\u002F"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:al}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:D}]},{type:a,value:aZ},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:"\narangorestore --server.endpoint tcp:\u002F\u002F127.0.0.1:8529 --server.username root --server.password "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aX}]},{type:a,value:aY},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:D}]},{type:a,value:" --input-directory "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:V},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:ah}]},{type:a,value:" --create-database\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:a,value:ba},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:al}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:D}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:a,value:bb},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:bc}]}]}]},{type:a,value:e},{type:b,tag:O,props:{id:aD},children:[{type:b,tag:v,props:{ariaHidden:w,href:"#add-systemd-service-for-life",tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:aE}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"It's a really good feature to automated tasks with system service to manage all services separately."}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"1- First you go to "},{type:b,tag:l,props:{},children:[{type:a,value:"\u002Fetc\u002Fsystemd\u002Fsystem"}]},{type:a,value:" and add "},{type:b,tag:l,props:{},children:[{type:a,value:"backup.servive"}]},{type:a,value:" and "},{type:b,tag:l,props:{},children:[{type:a,value:"backup.timer"}]},{type:a,value:"\n2- Backup service file for the run backup script\n3- Timer for the run backup script and specific time."}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,C]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:F}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:G}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:bd}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:"Schedule to run backup "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"service"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:F}]},{type:a,value:"Timer"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:G}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:be}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:be}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:"*-*-* 02:30:00\n"},{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:"backup.service\n"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:F}]},{type:a,value:"Install"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:G}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:"WantedBy"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:"multi-user.target\n"}]}]}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,C]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:F}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:G}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:bd}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:"Run sportbook  Arango DB backup script "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:F}]},{type:a,value:bf},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:G}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:F}]},{type:a,value:bf},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:G}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,m,f]},children:[{type:a,value:"ExecStart"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:"\u002Fbin\u002Fbash \u002Fhome\u002Fubuntu\u002Fbackup\u002Fbackup.sh\n"}]}]}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"After creating these two files in the system you must restart the service like below:"}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,an]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"sudo systemctl daemon-reload\nsudo systemctl start backup.time\nsudo systemctl status backup.time\n\n"}]}]}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"Now you have an automatic backup system with a timer on your server."}]}]},dir:aa,path:"\u002Farticles\u002Farangodb-devops",extension:ab,createdAt:K,updatedAt:K},next:{slug:"host-jekyll-theme-on-github",description:"In this article, you learn about how to deploy the Jekyll theme on the custom domain with Cloudflare",title:"Host Your Jekyll Theme on GitHub With CloudFlare",date:"2016-07-01",author:{name:X,bio:Y,img:Z},toc:[{id:bg,depth:M,text:bh}],body:{type:_,children:[{type:b,tag:N,props:{id:bg},children:[{type:b,tag:v,props:{href:"#how-to-deploy-jekyll-theme-on-custom-domain",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:bh}]},{type:a,value:e},{type:b,tag:bi,props:{},children:[{type:a,value:e},{type:b,tag:W,props:{},children:[{type:a,value:"Create a CNAME file and upload it to your gh-pages repository."}]},{type:a,value:e},{type:b,tag:W,props:{},children:[{type:a,value:"To do this, open your favourite text editor and type yout custom domain."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[an,t]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"www.pooyagolchian.com\n"}]}]}]},{type:a,value:e},{type:b,tag:bi,props:{start:L},children:[{type:a,value:e},{type:b,tag:W,props:{},children:[{type:a,value:"Go to your "},{type:b,tag:v,props:{href:"https:\u002F\u002Fwww.cloudflare.com\u002F",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"CloudFlare account"}]}]},{type:a,value:e},{type:b,tag:W,props:{},children:[{type:a,value:"Follow like this image with your repo link, For example: pooya-golchian.github.io"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:b,tag:"img",props:{alt:"Cloudflare",src:"\u002Fimg\u002Fcontent\u002Fcloud-flare\u002Fcloud-flare.png"},children:[]}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:a,value:"Github IP adress:"}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[an,t]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"192.30.252.153\n192.30.252.154\n"}]}]}]},{type:a,value:e},{type:b,tag:o,props:{},children:[{type:b,tag:"em",props:{},children:[{type:a,value:"CHEERS, your website hosted on GitHub :)"}]}]}]},dir:aa,path:"\u002Farticles\u002Fhost-jekyll-theme-on-github",extension:ab,createdAt:K,updatedAt:K}}],fetch:{},mutations:void 0}}("text","element","span","token","\n","variable","function"," ","string","operator","=","code","assign-left","punctuation","p","sudo","div","nuxt-content-highlight","pre","line-numbers","$DIRNAME","a","true",-1,"icon","icon-link","builtin","class-name","language-bash","$DATABASENAME","keyword","[","]","echo","\n    ","-","2021-09-08T17:57:56.812Z",3,2,"h2","h3","rm","intro","Intro","sed"," -i ","`","\"\u002Fhome\u002Fubuntu\u002Fbackup\u002F","li","Pooya Golchian","Frontend developer and DevOps engineer.","\u002Fimg\u002Favatar\u002Fpooya-golchian.jpg","root","tar","\u002Farticles",".md","shebang","important","cp","apt-get","\"s+endpoint = tcp:\u002F\u002F127.0.0.1:8529+endpoint = tcp:\u002F\u002F0.0.0.0:8529+g\"","\"","$NOWDATE","$BUCKETNAME","-backup.tar.gz\n","$FILE_NAME","Unit","language-text","pulling-docker-image-file","Pulling Docker image file","run-your-desire-command-in-docker-image","Run your desire command in docker image","extract-docker-image-and-searching-in-the-files","Extract Docker image and searching in the files","#intro","docker run --rm -it --entrypoint","I use Shell script for all steps to automate Arangodb backup and update from a to z!","install-last-verison-of-arangodb-on-ubuntu-1804","Install last verison of Arangodb on Ubuntu 18.04","arangodb-backup-and-upload-to-s3","Arangodb backup and upload to s3","arangodb-restore-and-download-from-s3","Arangodb restore and download from s3","add-systemd-service-for-life","Add systemd service for life!","install"," \u002Fetc\u002Farangodb3\u002Farangod.conf\n","#!\u002Fbin\u002Fsh","date","DIRNAME","\"Your directory name\"","BUCKETNAME","DATABASENAME","\"Your database name\"","if"," -d ","then","\"Directory \u002Fhome\u002Fubuntu\u002Fbackup\u002F"," exists.\"","else","\"Error: Directory \u002Fhome\u002Fubuntu\u002Fbackup\u002F"," does not exists.\"","fi","'as&m0ssJM1299'"," --server.database ","-backup.tar.gz -C \u002Fhome\u002Fubuntu\u002Fbackup\u002F","\naws s3 ","\u002Fdbbackup\u002F"," -rf \u002Fhome\u002Fubuntu\u002Fbackup\u002F"," -rf  \u002Fhome\u002Fubuntu\u002Fbackup\u002F","\u002F*\n","Description","OnCalendar","Service","how-to-deploy-jekyll-theme-on-custom-domain","How to deploy jekyll theme on custom domain","ol")));