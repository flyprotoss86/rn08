package com.rn08;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import io.agora.AgoraAPIOnlySignal;
import io.agora.rtc.IRtcEngineEventHandler;
import io.agora.rtc.RtcEngine;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
              new MyNativePackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);

    //agora
    setupAgoraEngine();
  }

  //******************  agora  *************************//
  public interface OnAgoraEngineInterface {
    void onFirstRemoteVideoDecoded(final int uid, int width, int height, int elapsed);
    void onUserOffline(int uid, int reason);
    void onUserMuteVideo(final int uid, final boolean muted);
    void onJoinChannelSuccess(String channel, int uid, int elapsed);
  }
  private final String TAG = MainApplication.class.getSimpleName();
  private static MainApplication mInstance;
  private AgoraAPIOnlySignal m_agoraAPI;
  private RtcEngine mRtcEngine;
  public static MainApplication the() {
    return mInstance;
  }
  public MainApplication() { mInstance = this; }
  private OnAgoraEngineInterface onAgoraEngineInterface;
  public RtcEngine getmRtcEngine() {
    return mRtcEngine;
  }
  public AgoraAPIOnlySignal getmAgoraAPI() {
    return m_agoraAPI;
  }
  public void setOnAgoraEngineInterface(OnAgoraEngineInterface onAgoraEngineInterface) { this.onAgoraEngineInterface = onAgoraEngineInterface; }

  private final IRtcEngineEventHandler mRtcEventHandler = new IRtcEngineEventHandler() {
    @Override
    public void onFirstRemoteVideoDecoded(final int uid, int width, int height, int elapsed) {
      if (onAgoraEngineInterface != null) {
        onAgoraEngineInterface.onFirstRemoteVideoDecoded(uid, width, height, elapsed);
      }
    }

    @Override
    public void onUserOffline(int uid, int reason) {
      Log.i(TAG, "onUserOffline uid: " + uid + " reason:" + reason);
      if (onAgoraEngineInterface != null) {
        onAgoraEngineInterface.onUserOffline(uid, reason);
      }
    }

    @Override
    public void onUserMuteVideo(final int uid, final boolean muted) {
      if (onAgoraEngineInterface != null) {
        onAgoraEngineInterface.onUserMuteVideo(uid, muted);
      }
    }

    @Override
    public void onJoinChannelSuccess(String channel, int uid, int elapsed) {
      super.onJoinChannelSuccess(channel, uid, elapsed);
      Log.i(TAG, "onJoinChannelSuccess channel:" + channel + " uid:" + uid);
      if (onAgoraEngineInterface != null) {
        onAgoraEngineInterface.onJoinChannelSuccess(channel, uid, elapsed);
      }
    }

  };
  private void setupAgoraEngine() {
    String appID = getString(R.string.agora_app_id);
    try {
      m_agoraAPI = AgoraAPIOnlySignal.getInstance(this, appID);
      mRtcEngine = RtcEngine.create(getBaseContext(), appID, mRtcEventHandler);
      Log.i(TAG, "setupAgoraEngine mRtcEngine :" + mRtcEngine);
    } catch (Exception e) {
      Log.e(TAG, Log.getStackTraceString(e));
      throw new RuntimeException("NEED TO check rtc sdk init fatal error\n" + Log.getStackTraceString(e));
    }
  }
}
