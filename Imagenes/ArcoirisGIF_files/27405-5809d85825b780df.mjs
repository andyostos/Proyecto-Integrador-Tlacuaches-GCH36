"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[27405],{366284:(e,t,a)=>{a.d(t,{G6:()=>r,i7:()=>l,oi:()=>i,u$:()=>s,un:()=>o,vU:()=>n});let i=Object.freeze({OTHER:0,CHROME:1,SAFARI:2,IE:3,FIREFOX:4,OPERA:5,EDGE:6}),s=e=>e?e.includes("Chrome")?i.CHROME:e.includes("Safari")?i.SAFARI:e.includes("Firefox")?i.FIREFOX:e.includes("Opera")?i.OPERA:e.includes("IE")?i.IE:e.includes("Edge")?i.EDGE:i.OTHER:i.OTHER;function r(e){return s(e)===i.SAFARI}function l(e){return s(e)===i.CHROME}function n(e){return s(e)===i.FIREFOX}function o(e){return s(e)===i.EDGE}},562559:(e,t,a)=>{a.d(t,{Z:()=>R});var i=a(667294),s=a(867631),r=a.n(s),l=a(883119),n=a(112690),o=a(391254),h=a(773285),d=a(780280),u=a(19121),p=a(969315),c=a(179888),y=a(965900),m=a(539766),S=a(785893);function v(e,t,a){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}let f=(e,t)=>typeof e!=typeof t||(Array.isArray(t)?e.length!==t.length||t.some((t,a)=>!Array.isArray(e)||t.type!==e[a].type||t.src!==e[a].src):t!==e),P=(e,t)=>t?e.replace("v1.pinimg.com","control"===t?"v3.pinimg.com":"v2.pinimg.com"):e,b=(e,t)=>e[0].src&&t?[{...e[0],src:P(e[0].src,t)}]:e,g=(e,t)=>"string"==typeof e?P(e,t):Array.isArray(e)?b(e,t):e;class E extends i.PureComponent{constructor(...e){super(...e),v(this,"state",{canPlayVideo:!1,isManifestParsed:!1,playbackState:c.Cy.DEFAULT,videoStartTime:this.props.seekTime||0}),v(this,"errorRetryCount",1),v(this,"firstFragBuffered",!1),v(this,"hasPlaybackStarted",!1),v(this,"hasVideoSessionStarted",!1),v(this,"hasVideoSessionEnded",!1),v(this,"hls",null),v(this,"fragStartupTime",{}),v(this,"lastLevelSwitchKbps",null),v(this,"lastStallTime",null),v(this,"lastPauseTime",null),v(this,"logSessionStartOnNextPlay",!1),v(this,"playerId",""),v(this,"videoSessionId",""),v(this,"videoVisibleTime",null),v(this,"playbackPerformance",{canPlayTime:null,detailedErrors:"",downloadedKiloBytes:0,errorCode:0,errorName:"",errorReason:"",hasFatalError:!1,loadStartTime:null,numberOfStalls:0,numberOfSeeks:0,playbackStartTimestamp:null,segments:[],srcString:"string"==typeof this.props.src?P(this.props.src,this.props.quicExpGroup):P(this.props.src[0].src,this.props.quicExpGroup),totalStallDurationMs:0,totalPauseDurationMs:0,videoCreatedTime:null}),v(this,"initializeHls",()=>{this.destroyHls();let{src:e,hlsConfig:t,quicExpGroup:a}=this.props,i=new(r())(t),s=g(e,a);i.loadSource(s),this.videoPlayerRef&&i.attachMedia(this.videoPlayerRef.video),i.on(r().Events.FRAG_BUFFERED,this.handleHlsFragBuffered),i.on(r().Events.FRAG_CHANGED,this.handleHlsFragChanged),i.on(r().Events.FRAG_LOADING,this.handleHlsFragLoading),i.on(r().Events.FRAG_LOADED,this.handleHlsFragLoaded),i.on(r().Events.MANIFEST_PARSED,()=>{this.setState({isManifestParsed:!0})}),i.on(r().Events.LEVEL_SWITCHED,this.handleHlsLevelSwitched),i.on(r().Events.ERROR,this.handleHlsError),this.hls=i}),v(this,"destroyHls",()=>{let{hls:e}=this;e&&e.destroy()}),v(this,"addSegment",e=>{let{segments:t}=this.playbackPerformance,a=t&&t[t.length-1];if(this.hls&&t.length&&a&&a.uri!==e.url){this.updateWatchDurationForCurrentSegment();let a=this.videoPlayerRef&&this.videoPlayerRef.video,i=this.hls&&this.hls.levels||{},s="number"==typeof e.level?i[e.level]:{},r=this.fragStartupTime[e.url],l=-1;r&&r.startLoadTime&&r.endLoadTime&&(l=r.endLoadTime-r.startLoadTime);let n={indicatedKbps:s.bitrate/c.bR,duration:e.duration,level:e.level,lastStartPlayTime:this.getCurrentVideoTime(),numServerAddressChange:-1,observedKbps:this.hls&&this.hls.bandwidthEstimate/c.bR||-1,playbackStartDate:Date.now(),serverAddress:"",sn:e.sn,sourceWidth:s.width,sourceHeight:s.height,startupTimeMs:l,switchBitrateKbps:this.lastLevelSwitchKbps||-1,uri:e.url,viewportWidth:a&&a.clientWidth||-1,viewportHeight:a&&a.clientHeight||-1,watchedDurationMs:0};t.push(n)}}),v(this,"initializeSegments",e=>{let{contextLogData:t={}}=this.props,{is_closeup_video:a=!1}=t,{segments:i}=this.playbackPerformance;if(!i.length){if(!this.hls||!this.videoPlayerRef||!this.videoPlayerRef.video||!e){(0,p.tE)("initializeSegmentsFailed",!0,a);return}if(!i.length&&"number"==typeof e.level){let t=this.videoPlayerRef&&this.videoPlayerRef.video,{levels:a}=this.hls,s="number"==typeof e.level?a[e.level]:{},r=this.fragStartupTime[e.url],l=-1;r&&r.startLoadTime&&r.endLoadTime&&(l=r.endLoadTime-r.startLoadTime),this.lastLevelSwitchKbps=this.hls.bandwidthEstimate/c.bR;let n={indicatedKbps:s.bitrate/c.bR,duration:e.duration,level:e.level,lastStartPlayTime:null,numServerAddressChange:-1,observedKbps:this.hls.bandwidthEstimate/c.bR||-1,playbackStartDate:null,serverAddress:"",sn:e.sn,sourceWidth:s.width,sourceHeight:s.height,startupTimeMs:l,switchBitrateKbps:this.lastLevelSwitchKbps||-1,uri:e.url,viewportWidth:t.clientWidth,viewportHeight:t.clientHeight,watchedDurationMs:0};i.push(n)}}}),v(this,"getCurrentVideoTime",()=>this.videoPlayerRef&&this.videoPlayerRef.video?this.videoPlayerRef.video.currentTime*c.gJ:null),v(this,"handleCanPlayVideo",e=>{let{contextLogData:t={},onReady:a,playing:i}=this.props,{is_closeup_video:s=!1}=t,{canPlayVideo:r}=this.state;(0,p.tE)("handleCanPlayVideo",!0,s,{firstCanPlayEvent:!r,playing:i}),this.playbackPerformance.hasFatalError=!1,r||(this.playbackPerformance.canPlayTime=new Date),this.setState({canPlayVideo:!0}),a&&a(e)}),v(this,"handleEnded",e=>{let{loop:t,onEnded:a}=this.props,{segments:i}=this.playbackPerformance,s=i&&i[i.length-1];t&&this.videoPlayerRef&&this.videoPlayerRef.video?(this.updateWatchDurationForCurrentSegment(),s&&(s.lastStartPlayTime=0),this.fragStartupTime={}):t||this.logPlaybackPerformance(c.$f,{initiator:"videoEnded",loop:t}),this.setState({playbackState:c.Cy.ENDED}),a&&a(e)}),v(this,"handleHlsError",(e,t)=>{var a,i,s,l,n,o,h;let{contextLogData:d={}}=this.props,{is_closeup_video:u=!1}=d;if(this.playbackPerformance.detailedErrors+=`${this.playbackPerformance.detailedErrors.length>0?", ":""}${t.details}`,t.fatal){this.playbackPerformance.hasFatalError=!0,this.playbackPerformance.errorName=t.type,this.playbackPerformance.errorReason=t.details,this.playbackPerformance.errorCode=t.response&&t.response.code?t.response.code:0;let e={errorName:t.type,errorReason:t.details,errorRetryCount:this.errorRetryCount,errorMessage:(null===(i=t.err)||void 0===i?void 0:null===(s=i.message)||void 0===s?void 0:s.slice(0,50))||"unknown",errorResponse:(null===(l=t.response)||void 0===l?void 0:null===(n=l.text)||void 0===n?void 0:n.slice(0,50))||"unknown",playbackState:this.state.playbackState};if((0,p.tE)("fatalError",!0,u,e),this.errorRetryCount>0)switch(this.errorRetryCount-=1,t.type){case r().ErrorTypes.NETWORK_ERROR:if(t.details===r().ErrorDetails.MANIFEST_LOAD_ERROR||t.details===r().ErrorDetails.MANIFEST_LOAD_TIMEOUT||t.details===r().ErrorDetails.MANIFEST_LOAD_PARSING_ERROR){let{src:e,quicExpGroup:t}=this.props,a=g(e,t);null===(o=this.hls)||void 0===o||o.loadSource(a)}else null===(h=this.hls)||void 0===h||h.startLoad();break;case r().ErrorTypes.MEDIA_ERROR:null===(a=this.hls)||void 0===a||a.recoverMediaError()}}this.updateWatchDurationForCurrentSegment(),this.setState({playbackState:c.Cy.FAILED})}),v(this,"handleHlsFragBuffered",(e,t)=>{this.firstFragBuffered||(this.initializeSegments(t.frag),this.firstFragBuffered=!0)}),v(this,"handleHlsFragChanged",(e,t)=>{this.addSegment(t.frag)}),v(this,"handleHlsFragLoading",(e,t)=>{var a;let i=null===(a=t.frag)||void 0===a?void 0:a.url;i&&!this.fragStartupTime[i]&&(this.fragStartupTime[i]={startLoadTime:new Date})}),v(this,"handleHlsFragLoaded",(e,t)=>{var a;t.frag&&t.frag.loaded&&(this.playbackPerformance.downloadedKiloBytes+=t.frag.loaded/c.Fm);let i=null===(a=t.frag)||void 0===a?void 0:a.url;i&&this.fragStartupTime[i]&&this.fragStartupTime[i].startLoadTime&&(this.fragStartupTime[i].endLoadTime=new Date)}),v(this,"handleHlsLevelSwitched",()=>{this.hls&&this.hls.bandwidthEstimate&&(this.lastLevelSwitchKbps=this.hls.bandwidthEstimate/c.bR)}),v(this,"handleLoadedMetadata",()=>{this.setState({playbackState:c.Cy.LOADED_METADATA})}),v(this,"handleLoadStart",()=>{this.playbackPerformance.loadStartTime=new Date,this.setState({playbackState:c.Cy.LOAD_START})}),v(this,"handleLoadedData",()=>{this.setState({playbackState:c.Cy.LOADED_DATA})}),v(this,"handlePlaying",()=>{this.playbackPerformance.hasFatalError=!1,this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.updateStallDuration(),this.updatePauseDuration(),this.setState({playbackState:c.Cy.PLAYING}),this.props.clearSeekTime&&this.props.clearSeekTime()}),v(this,"handleUserPause",e=>{let{onControlsPause:t}=this.props;this.lastPauseTime=new Date,t&&t(e)}),v(this,"handleVideoPause",()=>{this.state.playbackState===c.Cy.STALLING||this.state.playbackState===c.Cy.SEEKING||(this.updateWatchDurationForCurrentSegment(),this.lastPauseTime||this.updateStallDuration()),this.setState({playbackState:c.Cy.PAUSED})}),v(this,"handleSeeking",()=>{this.playbackPerformance.numberOfSeeks+=1;let{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&(t.lastStartPlayTime=null),this.state.playbackState!==c.Cy.ENDED&&this.setState({playbackState:c.Cy.SEEKING})}),v(this,"handleStalled",()=>{null===this.lastStallTime&&this.state.playbackState!==c.Cy.ENDED&&(this.lastStallTime=new Date,this.playbackPerformance.numberOfStalls+=1),this.setState({playbackState:c.Cy.STALLING})}),v(this,"handleTimeUpdate",e=>{let{onTimeChange:t}=this.props;t&&t(e),this.state.playbackState===c.Cy.PLAYING&&(this.updateWatchDurationForCurrentSegment(),this.setLastSegmentStartPlayTime())}),v(this,"resetPlaybackMetrics",()=>{this.hasPlaybackStarted=!1,this.hasVideoSessionStarted=!1,this.hasVideoSessionEnded=!0,this.lastLevelSwitchKbps=null,this.lastStallTime=null,this.lastPauseTime=null,this.videoSessionId="",this.videoVisibleTime=null,this.logSessionStartOnNextPlay=!1;let e=this.playbackPerformance.segments[this.playbackPerformance.segments.length-1],t={...e,lastStartPlayTime:null,playbackStartDate:null,switchBitrateKbps:-1,watchedDurationMs:0};this.playbackPerformance.detailedErrors="",this.playbackPerformance.downloadedKiloBytes=0,this.playbackPerformance.errorCode=0,this.playbackPerformance.errorName="",this.playbackPerformance.errorReason="",this.playbackPerformance.hasFatalError=!1,this.playbackPerformance.numberOfStalls=0,this.playbackPerformance.numberOfSeeks=0,this.playbackPerformance.playbackStartTimestamp=null,this.playbackPerformance.totalStallDurationMs=0,this.playbackPerformance.segments=[t]}),v(this,"setLastSegmentStartPlayTime",()=>{let{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&null===t.lastStartPlayTime&&(t.lastStartPlayTime=this.getCurrentVideoTime())}),v(this,"setLastSegmentPlaybackStartDate",()=>{let{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&null===t.playbackStartDate&&(t.playbackStartDate=Date.now())}),v(this,"setPlaybackStartTime",()=>{this.hasPlaybackStarted||(this.playbackPerformance.playbackStartTimestamp=Date.now(),this.hasPlaybackStarted=!0)}),v(this,"setVideoPlayerRef",e=>{let{setVideoRef:t}=this.props;if(e&&(t&&t(e),this.videoPlayerRef=e,this.videoPlayerRef.video)){let e=this.videoPlayerRef.video;e.addEventListener("loadedmetadata",this.handleLoadedMetadata),e.addEventListener("loadeddata",this.handleLoadedData),e.addEventListener("pause",this.handleVideoPause),e.readyState>=3&&(this.setState({canPlayVideo:!0}),this.playbackPerformance.canPlayTime=new Date)}}),v(this,"updateStallDuration",()=>{null!==this.lastStallTime&&(this.playbackPerformance.totalStallDurationMs+=new Date-this.lastStallTime,this.lastStallTime=null)}),v(this,"updatePauseDuration",()=>{if(null!==this.lastPauseTime){let{lastPauseTime:e}=this;this.playbackPerformance.totalPauseDurationMs+=new Date-e,this.lastPauseTime=null}}),v(this,"updateWatchDurationForCurrentSegment",()=>{let{segments:e}=this.playbackPerformance,t=e&&e[e.length-1],a=t?t.lastStartPlayTime:null,i=this.getCurrentVideoTime();if(t&&null!==a&&"number"==typeof i&&"number"==typeof a){let e=i-a;e>0&&(t.watchedDurationMs+=e,t.lastStartPlayTime=null)}}),v(this,"logPlaybackPerformance",(e,t)=>{let{contextLogData:a={},userId:i,isAutoPlay:s,logContextEvent:r,preload:l}=this.props,{is_closeup_video:n=!1}=a,{canPlayTime:o,detailedErrors:h,downloadedKiloBytes:d,errorCode:u,errorName:y,errorReason:m,hasFatalError:S,playbackStartTimestamp:v,totalPauseDurationMs:f,totalStallDurationMs:P,segments:b,srcString:g,loadStartTime:E,numberOfStalls:R,numberOfSeeks:D}=this.playbackPerformance,T=this.videoPlayerRef&&this.videoPlayerRef.video,k=e===c.DR,C=k&&!this.hasVideoSessionStarted,w=!k&&!this.hasVideoSessionEnded&&this.hasVideoSessionStarted;if(this.hls&&T&&(C||w)){var A;let C=-1;o&&E&&(C=o>E?o-E:0);let w=-1;o&&this.videoVisibleTime&&(w=o>this.videoVisibleTime?o-this.videoVisibleTime:0),k&&(this.videoSessionId=(0,c.Y7)(i),this.playerId=this.playerId||(0,c.EB)());let L={autoplaying:s,averageVideoKbps:-1,detailedErrors:h,downloadedKiloBytes:d,isCellular:!1,errorCode:u,errorName:y,errorReason:m,fatalError:S,nativeVideoDurationMs:T.duration*c.gJ||-1,numberOfStalls:R,numberOfSeeks:D,overallPausedDurationMs:f,overallBufferDurationMs:P,overallWatchedDurationMs:-1,rebufferRate:-1,playbackSessionId:this.videoSessionId,playbackStartTimestamp:v||-1,segments:[],sessionMark:e,screenPixelScale:null!==(A=window)&&void 0!==A&&A.devicePixelRatio?window.devicePixelRatio:-1,startupPlayerWidth:T.clientWidth,startupPlayerHeight:T.clientHeight,startupTimeMs:C,startupLatencyMs:w,startupVariantKbps:-1,startupVariantWatchedDurationMs:-1,startupVariantWidth:T.videoWidth,startupVariantHeight:T.videoHeight,videoUrl:g,wasVideoPreloaded:"auto"===l};if(!k&&b.length){let{levels:e}=this.hls,t=b[0];this.updateWatchDurationForCurrentSegment(),this.updateStallDuration();let a=b.reduce((t,a)=>{if(!a||"number"!=typeof a.level||!e||!(e.length>0))return t;{let i=(e[a.level]||{}).bitrate,s=a.watchedDurationMs;return t+i*(s||0)/c.gJ}},0),i=b.reduce((e,t)=>e+(t.watchedDurationMs||0),0),s=null,r=0,l=0;do r+=b[l].watchedDurationMs,s=s||b[l].level,l+=1;while(l<b.length&&b[l].level===s)L.startupVariantKbps=t.indicatedKbps,L.startupVariantWatchedDurationMs=r,L.startupVariantWidth=t.sourceWidth,L.startupVariantHeight=t.sourceHeight,L.startupPlayerWidth=t.viewportWidth,L.startupPlayerHeight=t.viewportHeight,L.overallWatchedDurationMs=i,i>0?(L.averageVideoKbps=a/(i/c.gJ),L.rebufferRate=this.playbackPerformance.totalStallDurationMs/i):0===i&&(L.averageVideoKbps=-1,L.rebufferRate=-1,L.errorName="invalid_watch_duration"),L.segments=b}else L.errorName="invalid_watch_duration";(0,p.ZP)(L,!0,n,{playbackState:this.state.playbackState,...t});let{clientTrackingParams:_,component:O,durationNs:F,element:I,objectId:M,pairId:H,viewData:V,view:x,viewParameter:N,...W}=a;r({aux_data:{...W,is_closeup_video:n,playback_session_id:this.videoSessionId},clientTrackingParams:_,component:O,duration_ns:F,element:I,event_data:{videoPerformanceData:L},event_type:3606,object_id_str:M,pair_id:H,view_data:V,view_parameter:N,view_type:x}),k?(this.hasVideoSessionStarted=!0,this.hasVideoSessionEnded=!1):this.resetPlaybackMetrics(),(0,p.tE)(k?"sessionStart":"sessionEnd",!0,n,{playbackState:this.state.playbackState,...t})}})}componentDidMount(){let{contextLogData:e={},playing:t}=this.props,{is_closeup_video:a=!1}=e;this.playbackPerformance.videoCreatedTime=new Date,this.initializeHls(),(0,p.tE)("videoMounted",!0,a),t&&(this.videoVisibleTime=new Date,this.logPlaybackPerformance(c.DR,{initiator:"mount"}))}componentDidUpdate(e){var t,a;let{loop:i,playing:s,src:r,visible:l,appInFocus:n,seekTime:o,captionsEnabled:h}=this.props,d=null===(t=this.videoPlayerRef)||void 0===t?void 0:null===(a=t.video)||void 0===a?void 0:a.textTracks[0];d&&(h?d.mode="showing":d.mode="disabled",d.addEventListener("cuechange",()=>{let e=d.activeCues&&d.activeCues.length>0&&d.activeCues[0];e&&e.line&&(e.line=-6,e.size=88)})),o&&o!==e.seekTime&&this.setState({videoStartTime:o}),f(e.src,r)&&this.initializeHls(),e.appInFocus&&!n&&(this.logPlaybackPerformance(c.$f,{initiator:"update",loop:i}),this.logSessionStartOnNextPlay=!0),e.visible&&!1===l&&(this.logSessionStartOnNextPlay=!1,this.updatePauseDuration(),this.logPlaybackPerformance(c.$f,{initiator:"update",loop:i})),!1===e.visible&&!0===l&&(this.videoVisibleTime=this.videoVisibleTime||new Date,s?(this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.logPlaybackPerformance(c.DR,{initiator:"update"})):this.logSessionStartOnNextPlay=!0),s&&n&&this.logSessionStartOnNextPlay&&(this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.logPlaybackPerformance(c.DR,{initiator:"update"}),this.logSessionStartOnNextPlay=!1)}componentWillUnmount(){let{loop:e}=this.props;this.updatePauseDuration(),this.logPlaybackPerformance(c.$f,{initiator:"unmount",loop:e}),this.destroyHls()}render(){let{aspectRatio:e,backgroundColor:t,captions:a,controls:i,loop:s,loopOverride:r,objectFit:n,onDurationChange:h,onFullscreenChange:d,onLoadedChange:u,onControlsPlay:p,onPlayheadDown:c,onPlayheadUp:y,onSeek:v,onVolumeChange:f,playbackRate:P,playing:b,playsInline:E,poster:R,preload:D,quicExpGroup:T,src:k,volume:C}=this.props,{canPlayVideo:w,isManifestParsed:A,videoStartTime:L}=this.state,_=g(k,T);return(0,S.jsxs)(l.xu,{children:[(0,S.jsx)(o.Z,{unsafeCSS:m.P}),(0,S.jsx)(l.nk,{ref:this.setVideoPlayerRef,aspectRatio:e,backgroundColor:t,captions:a,controls:i,loop:void 0===r?s:r,objectFit:n,onControlsPause:this.handleUserPause,onControlsPlay:p,onDurationChange:h,onEnded:this.handleEnded,onFullscreenChange:d,onLoadedChange:u,onLoadStart:this.handleLoadStart,onPlay:()=>{},onPlayError:()=>{},onPlayheadDown:c,onPlayheadUp:y,onPlaying:this.handlePlaying,onReady:this.handleCanPlayVideo,onSeek:v,onSeeking:this.handleSeeking,onStalled:this.handleStalled,onTimeChange:this.handleTimeUpdate,onVolumeChange:f,onWaiting:this.handleStalled,playbackRate:P,playing:A&&w&&b,playsInline:E,poster:R,preload:D,src:_,startTime:L,volume:C})]})}}let R=(0,i.memo)(function(e){let{country:t,isAuthenticated:a,isBot:i,isSocialBot:s,unauthId:r,userAgent:l}=(0,d.B)(),o=(0,n.Z)(),c=(0,u.Z)(),{browserName:m,browserVersion:v,isMobile:f}=l,{contextLogData:P={}}=e,{is_closeup_video:b=!1,view:g,viewParameter:R}=P,{checkExperiment:D}=(0,h.F)(),T=null;a&&(T=D("web_video_quic").group.length?D("web_video_quic").group:null);let{appUI:k}=(0,y.I)(),C=D("web_video_fail_to_start_fix").anyEnabled?k.appInFocus:e.appInFocus;return(0,p.r$)({browserName:m,browserVersion:v,country:t,isAuthenticated:a,isBot:i,is_closeup_video:b,isMobile:f,isSocialBot:s,view:g,viewParameter:R}),(0,S.jsx)(E,{...e,appInFocus:C,logContextEvent:o,quicExpGroup:T,userId:c.id||r})})},969315:(e,t,a)=>{a.d(t,{ZP:()=>p,r$:()=>d,tE:()=>u});var i=a(311560),s=a(179888),r=a(67347);let l=["isCellular","videoUrl","sessionMark"],n={},o="",h=e=>e<0?"negative":0===e?"zero":e<200?"xs":e<400?"s":e<600?"m":e<800?"l":e<1e3?"xl":e<1200?"xxl":"over1200",d=e=>{let{browserName:t,browserVersion:a,country:s,isAuthenticated:r,isBot:l,isMobile:h,isSocialBot:d,view:u="unknown",viewParameter:p="unknown"}=e;o=d&&"socialBot"||l&&"bot"||"nonbot";let c=(0,i.Z)(s);n={browserName:t,browserVersion:(null==a?void 0:a.split(".")[0])||"0",isAuthenticated:r,isMobile:h,region:c,view:u,viewParameter:p}};function u(e,t,a,i={}){let s={...i,...n},l=`web.video.${t?"hls":"nonHls"}.${o}.${a?"closeup":"nonCloseup"}.${e}`;"nonbot"===o&&(0,r.nP)(l,{sampleRate:1,tags:s})}function p(e,t,a,i={}){let d=a?"closeup":"nonCloseup",u=t?"hls":"nonHls",p=e.sessionMark===s.DR?"sessionStart":"sessionEnd",c={...i,...n};if("nonbot"===o&&(Object.entries(e).forEach(([t,a])=>{let i=`web.video.${u}.${o}.${d}.${p}.${t}`,s=parseInt(a,10),n="number"==typeof s?s:-1;if(!l.includes(t)){if(t.includes("fatalError")&&!0===a){let{errorCode:t,errorName:a,errorReason:s}=e;(0,r.nP)(i,{sampleRate:1,tags:{errorCode:t,errorName:a,errorReason:s,...c}})}else if(t.includes("Width")||t.includes("Height")){let e=h(n);(0,r.nP)(i,{sampleRate:1,tags:{dimensionBucket:e,...c}})}else if("numberOfStalls"===t){let e=a;n>1e3?e="over1000":n>10?e="over10":n<0&&(e="negative"),(0,r.nP)(i,{sampleRate:1,tags:{numberOfStalls:e,...c}})}else"screenPixelScale"===t?(0,r.nP)(i,{sampleRate:1,tags:{screenPixelScale:a||-1,...c}}):n>=0?(0===n&&(0,r.nP)(`${i}.zero`,{sampleRate:1,tags:c}),(0,r.LY)(i,n,{sampleRate:1})):n<0&&(0,r.nP)(`${i}.negative`,{sampleRate:1,tags:c})}}),e.sessionMark!==s.DR)){let{rebufferRate:t,screenPixelScale:a,startupLatencyMs:i,startupVariantWidth:s,startupPlayerWidth:l}=e,n=`web.video.${u}.${o}.${d}.${p}`;"number"==typeof s&&"number"==typeof l&&"number"==typeof a&&(0,r.nP)(`${n}.upscaled.${1.5*s>a*l?"good":"bad"}`,{sampleRate:1,tags:c}),"number"==typeof i&&(0,r.nP)(`${n}.startupLatency.${i<500?"good":"bad"}`,{sampleRate:1,tags:c}),"number"==typeof t&&(0,r.nP)(`${n}.rebufferRate.${t<.01?"good":"bad"}`,{sampleRate:1,tags:c})}}},179888:(e,t,a)=>{a.d(t,{$f:()=>r,Cy:()=>h,DR:()=>s,EB:()=>p,Fm:()=>o,Y7:()=>u,bR:()=>n,gJ:()=>l,lG:()=>d});var i=a(172045);let s=1,r=2,l=1e3,n=1e3,o=1e3,h=Object.freeze({DEFAULT:0,LOAD_START:1,LOADED_METADATA:2,LOADED_DATA:3,PLAYING:4,PAUSED:5,SEEKING:6,STALLING:7,FAILED:8,ENDED:9}),d=Object.freeze({MEDIA_ERR_ABORTED:1,MEDIA_ERR_NETWORK:2,MEDIA_ERR_DECODE:3,MEDIA_ERR_SRC_NOT_SUPPORTED:4});function u(e){return e+"-"+(0,i.Z)()}function p(){return(0,i.Z)()}},539766:(e,t,a)=>{a.d(t,{P:()=>y,Z:()=>S});var i=a(667294),s=a(867631),r=a.n(s),l=a(883119),n=a(366284),o=a(898781),h=a(391254),d=a(780280),u=a(50286),p=a(785893);function c(e,t,a){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}let y=`
  video::cue {
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, 'ヒラギノ角ゴ Pro W3', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', Arial, sans-serif;
    font-weight: 450;
    font-size: 18px;
  }
`;class m extends i.PureComponent{constructor(...e){super(...e),c(this,"state",{videoStartTime:0}),c(this,"setVideoPlayerRef",e=>{let{setVideoRef:t,handlePlay:a,autoplay:i=!0}=this.props;this.videoPlayerRef=e,e&&t&&t(e.video),this.videoPlayerRef&&this.videoPlayerRef.video&&a&&i&&this.videoPlayerRef.video.addEventListener("canplay",()=>{a({userTriggeredPlay:!1})})}),c(this,"hls",null),c(this,"initializeHls",()=>{this.destroyHls();let{src:e}=this.props,t=new(r());r().isSupported()&&!(0,n.G6)(this.props.requestContext.userAgent.browserName)&&(t.loadSource(e),this.videoPlayerRef&&t.attachMedia(this.videoPlayerRef.video)),this.hls=t}),c(this,"destroyHls",()=>{let{hls:e}=this;e&&e.destroy()}),c(this,"onPlay",({event:e})=>{let{handlePlay:t}=this.props;e.stopPropagation(),t&&t({userTriggeredPlay:!0})}),c(this,"onPause",({event:e})=>{let{handlePause:t}=this.props;e.stopPropagation(),t&&t()}),c(this,"handleVolumeChange",({event:e,volume:t})=>{let{onVolumeChange:a}=this.props;e.stopPropagation(),a&&a({volume:t})}),c(this,"handleOnReady",e=>{this.props.onReady&&this.props.onReady(e)}),c(this,"handleEnded",()=>{let{onEnded:e}=this.props;e&&e()}),c(this,"handlePlaying",()=>{let{clearSeekTime:e}=this.props;e&&e()})}componentDidMount(){this.initializeHls()}componentWillUnmount(){this.destroyHls()}componentDidUpdate(e){var t,a;let{activeStreamItemIndex:i,playing:s,src:l,seekTime:n,captionsEnabled:o,isDesktop:h,isTablet:d,requestContext:u,isVideoPin:p}=this.props,{isAuthenticated:c}=u;n&&n!==e.seekTime&&this.setState({videoStartTime:n});let y=null===(t=this.videoPlayerRef)||void 0===t?void 0:null===(a=t.video)||void 0===a?void 0:a.textTracks[0];y&&(o?y.mode="showing":y.mode="disabled",y.addEventListener("cuechange",()=>{let e=y.activeCues&&y.activeCues.length>0&&y.activeCues[0];e&&e.line&&(h?(e.line=-6,e.size=88):(c?e.line=-8:(e.line=-10,d&&(e.line=-15)),e.size=70),p&&(e.line=-5))})),i!==e.activeStreamItemIndex&&this.videoPlayerRef&&this.videoPlayerRef.video&&(this.videoPlayerRef.video.currentTime=0),e.src!==l&&(this.initializeHls(),this.hls&&this.hls.on(r().Events.MANIFEST_PARSED,()=>{void 0!==s&&s&&this.videoPlayerRef&&this.videoPlayerRef.play()}))}render(){let{aspectRatio:e,controls:t,loop:a=!1,poster:i,src:s,onTimeChange:r,playing:n,volume:o,captions:d}=this.props;return(0,p.jsxs)(l.xu,{width:"100%",children:[(0,p.jsx)(h.Z,{unsafeCSS:y}),(0,p.jsx)(l.nk,{autoplay:n,playsInline:!0,aspectRatio:e,captions:d,controls:t,loop:a,onControlsPause:this.onPause,onControlsPlay:this.onPlay,onReady:this.handleOnReady,onEnded:this.handleEnded,onVolumeChange:this.handleVolumeChange,onTimeChange:r,onPlay:()=>{},onPlaying:this.handlePlaying,onPlayError:()=>{},playing:n,poster:i,ref:this.setVideoPlayerRef,src:s,startTime:this.state.videoStartTime||void 0,volume:o})]})}}function S(e){let{clearSeekTime:t,pinId:a="",seekTime:i}=e,s=(0,o.ZP)(),r=(0,d.B)(),l=(0,u.HG)(),n=(0,u.Wb)();return(0,p.jsx)(m,{...e,i18n:s,requestContext:r,isDesktop:l,isTablet:n,seekTime:i,clearSeekTime:()=>{t&&t(a)}})}},944546:(e,t,a)=>{a.d(t,{Ul:()=>r,VS:()=>i,hy:()=>l,iM:()=>s,j4:()=>n});let i=2,s=[0,.01,.02,.03,.04,.05,.06,.07,.08,.09,.1,.11,.12,.13,.14,.15,.16,.17,.18,.19,.2,.21,.22,.23,.24,.25,.26,.27,.28,.29,.3,.31,.32,.33,.34,.35,.36,.37,.38,.39,.4,.41,.42,.43,.44,.45,.46,.47,.48,.49,.5,.51,.52,.53,.54,.55,.56,.57,.58,.59,.6,.61,.62,.63,.64,.65,.66,.67,.68,.69,.7,.71,.72,.73,.74,.75,.76,.77,.78,.79,.8,.81,.82,.83,.84,.85,.86,.87,.88,.89,.9,.91,.92,.93,.94,.95,.96,.97,.98,.99,1],r={backgroundImage:"linear-gradient(to top, rgba(0, 0, 0, .4), rgba(0, 0, 0, 0))",pointerEvents:"none",bottom:0},l=128,n=e=>e&&document.querySelector(`video[poster="${e}"]`)||null}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/27405-5809d85825b780df.mjs.map