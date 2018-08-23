package com.rn08;
import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MyNativeViewBridge extends ReactContextBaseJavaModule {
    ReactApplicationContext aContext;
    public MyNativeViewBridge(ReactApplicationContext reactContext){
        super(reactContext);
        aContext = reactContext;
    }

    @Override
    public String getName() {
        return "MyNativeViewBridge";
    }

    @ReactMethod
    public void HandleCallView(String aMessage){
        Log.i("RNmessage", "receive from RN: "+ aMessage);
        //Intent aIntent = new Intent(aContext, VideoChatViewActivity.class);
        Intent aIntent = new Intent(aContext, AgoraMainActivity.class);
        aIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        aContext.startActivity(aIntent);
    }
}
