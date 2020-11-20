//
//  DeviceInfoManager.m
//  MedicBleep
//
//  Created by Mohit Sharma on 28/01/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "DeviceInfoManager.h"
#import <sys/utsname.h>

@implementation DeviceInfoManager

- (instancetype)init
{
  self = [super init];
  if (self) {
    
  }
  return self;
}

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"notificationsUserDefaultData"];
}

// To export a module named MBMainAppManageNotificationData
RCT_EXPORT_MODULE();

-(NSString *)getDeviceName {
    NSString *deviceName = @"iPhone";
    struct utsname systemInfo;
    uname(&systemInfo);
    NSString* deviceCode = [NSString stringWithCString:systemInfo.machine
                                        encoding:NSUTF8StringEncoding];

    static NSDictionary* deviceNamesByCode = nil;
    
    if (!deviceNamesByCode) {
        deviceNamesByCode =     @{
                                  @"i386"     :    @"i386 Simulator",
                                  @"x86_64"   :    @"x86_64 Simulator",
                                  
                                  @"iPhone1,1":    @"iPhone",
                                  @"iPhone1,2":    @"iPhone 3G",
                                  @"iPhone2,1":    @"iPhone 3GS",
                                  @"iPhone3,1":    @"iPhone 4",
                                  @"iPhone3,2":    @"iPhone 4",
                                  @"iPhone3,3":    @"iPhone 4",
                                  @"iPhone4,1":    @"iPhone 4S",
                                  @"iPhone5,1":    @"iPhone 5",
                                  @"iPhone5,2":    @"iPhone 5",
                                  @"iPhone5,3":    @"iPhone 5c",
                                  @"iPhone5,4":    @"iPhone 5c",
                                  @"iPhone6,1":    @"iPhone 5s",
                                  @"iPhone6,2":    @"iPhone 5s",
                                  
                                  @"iPhone7,1":    @"iPhone 6+",
                                  @"iPhone7,2":    @"iPhone 6",
                                  
                                  @"iPhone8,1":    @"iPhone 6S",
                                  @"iPhone8,2":    @"iPhone 6S+",
                                  @"iPhone8,4":    @"iPhone SE",
                                  @"iPhone9,1":    @"iPhone 7",
                                  @"iPhone9,2":    @"iPhone 7+",
                                  @"iPhone9,3":    @"iPhone 7",
                                  @"iPhone9,4":    @"iPhone 7+",
                                  
                                  @"iPhone10,1" : @"iPhone 8",
                                  @"iPhone10,2" : @"iPhone 8 Plus",
                                  @"iPhone10,3" : @"iPhone X Global",
                                  @"iPhone10,4" : @"iPhone 8",
                                  @"iPhone10,5" : @"iPhone 8 Plus",
                                  @"iPhone10,6" : @"iPhone X",
                                  @"iPhone11,2": @"iPhone XS",
                                  @"iPhone11,4": @"iPhone XS Max China",
                                  @"iPhone11,6": @"iPhone XS Max",
                                  @"iPhone11,8": @"iPhone XR",
                                  
                                  @"iPad1,1":  @"iPad",
                                  @"iPad2,1":  @"iPad 2",
                                  @"iPad2,2":  @"iPad 2",
                                  @"iPad2,3":  @"iPad 2",
                                  @"iPad2,4":  @"iPad 2",
                                  @"iPad2,5":  @"iPad Mini 1G",
                                  @"iPad2,6":  @"iPad Mini 1G",
                                  @"iPad2,7":  @"iPad Mini 1G",
                                  @"iPad3,1":  @"iPad 3",
                                  @"iPad3,2":  @"iPad 3",
                                  @"iPad3,3":  @"iPad 3",
                                  @"iPad3,4":  @"iPad 4",
                                  @"iPad3,5":  @"iPad 4",
                                  @"iPad3,6":  @"iPad 4",
                                  
                                  @"iPad4,1":  @"iPad Air",
                                  @"iPad4,2":  @"iPad Air",
                                  @"iPad4,3":  @"iPad Air",
                                  
                                  @"iPad5,3":  @"iPad Air 2",
                                  @"iPad5,4":  @"iPad Air 2",
                                  
                                  @"iPad4,4":  @"iPad Mini 2G",
                                  @"iPad4,5":  @"iPad Mini 2G",
                                  @"iPad4,6":  @"iPad Mini 2G",
                                  
                                  @"iPad4,7":  @"iPad Mini 3G",
                                  @"iPad4,8":  @"iPad Mini 3G",
                                  @"iPad4,9":  @"iPad Mini 3G",
                                  
                                  @"iPod1,1":  @"iPod 1st Gen",
                                  @"iPod2,1":  @"iPod 2nd Gen",
                                  @"iPod3,1":  @"iPod 3rd Gen",
                                  @"iPod4,1":  @"iPod 4th Gen",
                                  @"iPod5,1":  @"iPod 5th Gen",
                                  @"iPod7,1":  @"iPod 6th Gen",
                                  };

    }
    if ([deviceNamesByCode objectForKey:deviceCode] && [deviceNamesByCode objectForKey:deviceCode] != nil && ![[deviceNamesByCode objectForKey:deviceCode] isEqualToString:@""]) {
        deviceName = [deviceNamesByCode objectForKey:deviceCode];
    }
    else {
        if ([deviceCode rangeOfString:@"iPod"].location != NSNotFound) {
            deviceName = @"iPod Touch";
        }
        else if([deviceCode rangeOfString:@"iPad"].location != NSNotFound) {
            deviceName = @"iPad";
        }
        else {
            deviceName = deviceCode;
        }
    }
    return deviceName;
}

-(NSDictionary *)getDeviceInfo{
  NSDictionary *infoDictionary = [[NSBundle mainBundle] infoDictionary];
  NSString *version = [infoDictionary objectForKey:@"CFBundleShortVersionString"];
    
  NSDictionary *info = @{
    @"version"     : version,
    @"device"      : [self getDeviceName],
    @"deviceId"   : [UIDevice currentDevice].identifierForVendor.UUIDString,
    @"deviceType": [self deviceType],
  };
  return info;
}

- (NSString *) deviceType {
    struct utsname systemInfo;
    uname(&systemInfo);
    NSString* deviceId = [NSString stringWithCString:systemInfo.machine
                                            encoding:NSUTF8StringEncoding];

    if ([deviceId isEqualToString:@"i386"] || [deviceId isEqualToString:@"x86_64"] ) {
        return @"Simulator";
    } else {
        return @"Device";
    }
}

//Send deviceInfo data to react-native
RCT_EXPORT_METHOD(getNativeDeviceInfo:(RCTResponseSenderBlock)callback){
  callback(@[@{@"deviceInfo":[self getDeviceInfo]}]);
}


@end
