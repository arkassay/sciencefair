package com.beta.cohealth;

import android.app.Activity;
import android.app.Notification;
import android.app.PendingIntent;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.NotificationCompat;
import android.support.v4.app.NotificationManagerCompat;
import android.support.wearable.view.WatchViewStub;
import android.view.View;
import android.widget.TextView;

import org.w3c.dom.Text;

public class healthOptions extends Activity implements View.OnClickListener {

    private TextView addWater, joinEvent;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_health_options);


        final WatchViewStub stub = (WatchViewStub) findViewById(R.id.watch_view_stub);
        stub.setOnLayoutInflatedListener(new WatchViewStub.OnLayoutInflatedListener() {
            @Override
            public void onLayoutInflated(WatchViewStub stub) {
                addWater = (TextView) stub.findViewById(R.id.addWater);
                //joinEvent = (TextView) stub.findViewById(R.id.joinEvent);

                addWater.setOnClickListener(healthOptions.this);

            }
        });
    }

    public void onClick(View view) {

        if(view instanceof TextView) {
            //Intent intentConfirmActivity = new Intent(healthOptions.this);

            switch (view.getId()) {
                case R.id.addWater:
                    //setContentView(R.layout.activity_add_water);
                    Intent intent1 = new Intent(this, addWater.class);
                    startActivity(intent1);
                    break;
                /*case R.id.joinEvent:
                    Intent intent1 = new Intent(this, Home.class);
                    startActivity(intent1);*/
                default:
                    break;
            }
        }
    }
}
