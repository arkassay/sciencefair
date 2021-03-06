package com.beta.cohealth;

import android.app.Activity;
import android.app.Notification;
import android.app.PendingIntent;
import android.content.Intent;
import android.media.Image;
import android.os.Bundle;
import android.support.v4.app.NotificationCompat;
import android.support.v4.app.NotificationManagerCompat;
import android.support.wearable.activity.ConfirmationActivity;
import android.support.wearable.view.WatchViewStub;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

public class addWater extends Activity implements View.OnClickListener {

    private ImageView waterImage;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_water);
        final WatchViewStub stub = (WatchViewStub) findViewById(R.id.watch_view_stub);

        stub.setOnLayoutInflatedListener(new WatchViewStub.OnLayoutInflatedListener() {
            @Override
            public void onLayoutInflated(WatchViewStub stub) {
                //waterImage = (ImageView) findViewById(R.id.waterImage2);

                //waterImage.setOnClickListener(addWater.this);
            }
        });
    }

    public void onClick(View view) {

        if(view instanceof ImageView) {
            Intent intentConfirmActivity = new Intent(addWater.this, ConfirmationActivity.class);
            int animation;
            String message = "";

            switch (view.getId()) {
                /*case R.id.waterImage2:
                    animation = ConfirmationActivity.SUCCESS_ANIMATION;
                    message = "8oz water added";
                    Log.i("clicked water", "on click event");
                    break;*/
                default:
                    animation = ConfirmationActivity.FAILURE_ANIMATION;
                    //animation = ConfirmationActivity.OPEN_ON_PHONE_ANIMATION;
                    message = "unable to add amount";
                    break;
            }

            intentConfirmActivity.putExtra(ConfirmationActivity.EXTRA_ANIMATION_TYPE, animation);
            intentConfirmActivity.putExtra(ConfirmationActivity.EXTRA_MESSAGE, message);
            startActivity(intentConfirmActivity);
        }
    }
}
