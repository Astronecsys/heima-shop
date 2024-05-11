<template name="skeleton">
    <view class="sk-container">
      <view class="viewport viewport">
        <view class="search search">
          <view class="input input">
            <text class="icon-search sk-transparent sk-text-14-2857-815 sk-text sk-pseudo sk-pseudo-circle">女靴</text>
          </view>
        </view>
        <view class="categories categories">
          <scroll-view :scroll-y="true" class="primary primary">
            <view class="item active sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-489 sk-text">居家</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-336 sk-text">美食</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-38 sk-text">服饰</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-33 sk-text">母婴</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-454 sk-text">个护</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-518 sk-text">严选</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-841 sk-text">数码</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-257 sk-text">运动</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-134 sk-text">杂项</text>
            </view>
          </scroll-view>
          <scroll-view :scroll-y="true" class="secondary secondary">
            <view is="components/XtxSwiper" class="banner banner">
              <view class="carousel XtxSwiper--carousel">
                <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
                  <swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
                    <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                      <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                    </navigator>
                  </swiper-item>
                  <swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(100%, 0px) translateZ(0px);">
                    <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                      <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                    </navigator>
                  </swiper-item>
                </swiper>
                <view class="indicator XtxSwiper--indicator">
                  <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
                  <text class="dot XtxSwiper--dot"></text>
                  <text class="dot XtxSwiper--dot"></text>
                  <text class="dot XtxSwiper--dot"></text>
                  <text class="dot XtxSwiper--dot"></text>
                </view>
              </view>
            </view>
            <view class="panel panel">
              <view class="title title">
                <text class="name sk-transparent sk-text-26-6667-885 sk-text">居家生活用品</text>
                <navigator class="more sk-transparent sk-text-30-0000-203 sk-text sk-pseudo sk-pseudo-circle" hover-class="none">全部</navigator>
              </view>
              <view class="section section">
                <navigator class="goods goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-269 sk-text">钻石陶瓷涂层多用锅18cm 小奶锅</view>
                  <view class="price price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-291 sk-text">149.00</text>
                  </view>
                </navigator>
                <navigator class="goods goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-312 sk-text">极光限定 珠光蓝珐琅锅</view>
                  <view class="price price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-661 sk-text">199.00</text>
                  </view>
                </navigator>
              </view>
            </view>
            <view class="panel panel">
              <view class="title title">
                <text class="name sk-transparent sk-text-26-6667-989 sk-text">收纳</text>
                <navigator class="more sk-transparent sk-text-30-0000-561 sk-text sk-pseudo sk-pseudo-circle" hover-class="none">全部</navigator>
              </view>
              <view class="section section">
                <navigator class="goods goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-346 sk-text">给衣柜减减肥，真空防潮压缩袋</view>
                  <view class="price price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-561 sk-text">79.00</text>
                  </view>
                </navigator>
                <navigator class="goods goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-896 sk-text">爆款明星好物，抽屉式透明储物柜</view>
                  <view class="price price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-33 sk-text">129.00</text>
                  </view>
                </navigator>
                <navigator class="goods goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-712 sk-text">衣柜省空间神器，棉麻涤·收纳挂袋</view>
                  <view class="price price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-363 sk-text">55.00</text>
                  </view>
                </navigator>
                <navigator class="goods goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-782 sk-text">换季好帮手，大容量防尘衣物收纳袋</view>
                </navigator>
                <navigator class="goods goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-626 sk-text">可水洗的布艺收纳盒</view>
                </navigator>
                <navigator class="goods goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-391 sk-text">开发员自留款，带滚轮双层脏衣篓</view>
                </navigator>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
    </view>
  </template>

<style>
.sk-transparent {
    color: transparent !important;
  }
.sk-text-14-2857-815 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 39.2000rpx;
    position: relative !important;
  }
.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
  }
.sk-text-14-2857-489 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-336 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-38 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-33 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-454 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-518 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-841 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-257 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-134 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-26-6667-885 {
    background-image: linear-gradient(transparent 26.6667%, #EEEEEE 0%, #EEEEEE 73.3333%, transparent 0%) !important;
    background-size: 100% 60.0000rpx;
    position: relative !important;
  }
.sk-text-30-0000-203 {
    background-image: linear-gradient(transparent 30.0000%, #EEEEEE 0%, #EEEEEE 70.0000%, transparent 0%) !important;
    background-size: 100% 60.0000rpx;
    position: relative !important;
  }
.sk-text-14-2857-269 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
  }
.sk-opacity {
    opacity: 0 !important;
  }
.sk-text-14-2857-291 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-312 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
  }
.sk-text-14-2857-661 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-26-6667-989 {
    background-image: linear-gradient(transparent 26.6667%, #EEEEEE 0%, #EEEEEE 73.3333%, transparent 0%) !important;
    background-size: 100% 60.0000rpx;
    position: relative !important;
  }
.sk-text-30-0000-561 {
    background-image: linear-gradient(transparent 30.0000%, #EEEEEE 0%, #EEEEEE 70.0000%, transparent 0%) !important;
    background-size: 100% 60.0000rpx;
    position: relative !important;
  }
.sk-text-14-2857-346 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
  }
.sk-text-14-2857-561 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-896 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
  }
.sk-text-14-2857-712 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
  }
.sk-text-14-2857-363 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-782 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
  }
.sk-text-14-2857-626 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
  }
.sk-text-14-2857-391 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 30.8000rpx;
    position: relative !important;
  }
.sk-image {
    background: #EFEFEF !important;
  }
.sk-pseudo::before, .sk-pseudo::after {
      background: #EFEFEF !important;
      background-image: none !important;
      color: transparent !important;
      border-color: transparent !important;
    }
.sk-pseudo-rect::before, .sk-pseudo-rect::after {
      border-radius: 0 !important;
    }
.sk-pseudo-circle::before, .sk-pseudo-circle::after {
      border-radius: 50% !important;
    }
.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
  }

</style>