//
//  ReactNativeHapticView.m
//  ReactNativeHapticView
//
//  Created by Hamid Hadi on 10/26/1397 AP.
//  Copyright © 1397 AP Hamid Hadi. All rights reserved.
//

#import <React/RCTBridgeModule.h>

@interface HapticViewManager : NSObject <RCTBridgeModule>
@end

@implementation HapticViewManager

RCT_EXPORT_MODULE(HapticViewManager)

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(performHaptic:(NSInteger *)params)
{
    int feedbackType = (int) params;

    if (feedbackType == 0) {
        UISelectionFeedbackGenerator *feedbackGenerator = [[UISelectionFeedbackGenerator alloc] init];
        [feedbackGenerator prepare];

        [feedbackGenerator selectionChanged];
        [feedbackGenerator prepare];
    } else if (feedbackType > 0 & feedbackType < 4) {
        UINotificationFeedbackGenerator *feedbackGenerator = [[UINotificationFeedbackGenerator alloc] init];

        UINotificationFeedbackType feedbackNotificationType[3] = {UINotificationFeedbackTypeSuccess, UINotificationFeedbackTypeWarning, UINotificationFeedbackTypeError};

        [feedbackGenerator prepare];
        [feedbackGenerator notificationOccurred:(feedbackNotificationType[feedbackType - 1])];
        [feedbackGenerator prepare];
    } else if (feedbackType == 4) {
        UIImpactFeedbackGenerator *feedbackGenerator = [[UIImpactFeedbackGenerator alloc] init];
        [feedbackGenerator prepare];

        [feedbackGenerator impactOccurred];
        [feedbackGenerator prepare];
    }
}

@end
