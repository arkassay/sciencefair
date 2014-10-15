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
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.ListView;

public class Home extends Activity implements View.OnClickListener{

    private TextView mTextView;
    private Button buttonSuccess;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);


        Intent intentTakeStairs = new Intent(this, healthOptions.class);
        PendingIntent takeStairs = PendingIntent.getActivity(this, 0, intentTakeStairs, PendingIntent.FLAG_UPDATE_CURRENT);

        Intent intentAddWater = new Intent(this, addWater.class);
        PendingIntent openAddWater = PendingIntent.getActivity(this, 0, intentAddWater, PendingIntent.FLAG_UPDATE_CURRENT);

        NotificationCompat.Action actionAddWater = new NotificationCompat.Action.Builder(
                R.drawable.drinkwater, getString(R.string.drinkScreenTitle), openAddWater).build();

        NotificationCompat.Action actionTakeStairs = new NotificationCompat.Action.Builder(
                R.drawable.ic_launcher, getString(R.string.walkNotificationTitle), takeStairs).build();

        Notification notificationWater = new NotificationCompat.Builder(this)
                .setContentText(getString(R.string.drinkNotificationDesc))
                .setContentTitle(getString(R.string.drinkNotificationTitle))
                .setSmallIcon(R.drawable.drinkwater)
                //.setContentIntent(openAddWater)
                .extend(new NotificationCompat.WearableExtender().addAction(actionAddWater))
                .build();

        Notification notificationTakeStairs = new NotificationCompat.Builder(this)
                .setContentText(getString(R.string.walkNotificationDesc))
                .setContentTitle(getString(R.string.walkNotificationTitle))
                .setSmallIcon(R.drawable.ic_launcher)
                //.setContentIntent(takeStairs)
                .extend(new NotificationCompat.WearableExtender().addAction(actionTakeStairs))
                .build();

        NotificationManagerCompat notificationManagerCompat = NotificationManagerCompat.from(this);
        notificationManagerCompat.notify(001, notificationWater);

        NotificationManagerCompat notificationManagerCompat2 = NotificationManagerCompat.from(this);
        notificationManagerCompat2.notify(002, notificationTakeStairs);



        final WatchViewStub stub = (WatchViewStub) findViewById(R.id.watch_view_stub);
        stub.setOnLayoutInflatedListener(new WatchViewStub.OnLayoutInflatedListener() {
            @Override
            public void onLayoutInflated(WatchViewStub stub) {
                mTextView = (TextView) stub.findViewById(R.id.text);
                /*buttonSuccess = (Button) findViewById(R.id.buttonSuccess);*/
            }
        });
    }

    public void onClick(View view) {

        if(view instanceof Button) {
            Intent intentConfirmActivity = new Intent(Home.this, ConfirmationActivity.class);
            int animation;
            String message = "";

            switch (view.getId()) {
                /*case R.id.buttonSuccess:
                    animation = ConfirmationActivity.SUCCESS_ANIMATION;
                    message = "8oz water added";
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