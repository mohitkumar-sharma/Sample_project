package com.example;

import android.content.pm.PackageInfo;
import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;

import java.util.Locale;
import java.util.UUID;

import javax.annotation.Nonnull;

public class DeviceInfoModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext reactContext;

    /**
     * Constructor
     * @param reactContext : current class reference
     */
    public DeviceInfoModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    /**
     * Device info method
     * @param callback : data return to react native by callback
     */
    @ReactMethod
    public void getNativeDeviceInfo(Callback callback) {
        try {
            PackageInfo packageInfo = reactContext.getPackageManager().getPackageInfo(reactContext.getPackageName(), 0);
            WritableMap params = Arguments.createMap();
            Log.e("", isEmulatorSync()? "Emulator" : "Device");
            params.putString("version", packageInfo.versionName);
            params.putString("device", android.os.Build.DEVICE);
            params.putString("deviceId", UUID.randomUUID().toString());
            params.putString("deviceType", isEmulatorSync() ? "Emulator" : "Device");

            WritableMap deviceInfoParams = Arguments.createMap();
            deviceInfoParams.putMap("deviceInfo", params);
            callback.invoke(deviceInfoParams);
        } catch (Exception e) {
            callback.invoke(null);
        }
    }

    public boolean isEmulatorSync() {
    return android.os.Build.FINGERPRINT.startsWith("generic")
            || android.os.Build.FINGERPRINT.startsWith("unknown")
            || android.os.Build.MODEL.contains("google_sdk")
            || android.os.Build.MODEL.toLowerCase(Locale.ROOT).contains("droid4x")
            || android.os.Build.MODEL.contains("Emulator")
            || android.os.Build.MODEL.contains("Android SDK built for x86")
            || android.os.Build.MANUFACTURER.contains("Genymotion")
            || android.os.Build.HARDWARE.contains("goldfish")
            || android.os.Build.HARDWARE.contains("ranchu")
            || android.os.Build.HARDWARE.contains("vbox86")
            || android.os.Build.PRODUCT.contains("sdk")
            || android.os.Build.PRODUCT.contains("google_sdk")
            || android.os.Build.PRODUCT.contains("sdk_google")
            || android.os.Build.PRODUCT.contains("sdk_x86")
            || android.os.Build.PRODUCT.contains("vbox86p")
            || android.os.Build.PRODUCT.contains("emulator")
            || android.os.Build.PRODUCT.contains("simulator")
            || android.os.Build.BOARD.toLowerCase(Locale.ROOT).contains("nox")
            || android.os.Build.BOOTLOADER.toLowerCase(Locale.ROOT).contains("nox")
            || android.os.Build.HARDWARE.toLowerCase(Locale.ROOT).contains("nox")
            || android.os.Build.PRODUCT.toLowerCase(Locale.ROOT).contains("nox")
            || android.os.Build.SERIAL.toLowerCase(Locale.ROOT).contains("nox")
            || (android.os.Build.BRAND.startsWith("generic") && android.os.Build.DEVICE.startsWith("generic"));
  }

    /**
     * Name of Native module
     * @return
     */
    @Nonnull
    @Override
    public String getName() {
        return "DeviceInfoManager";
    }
}
