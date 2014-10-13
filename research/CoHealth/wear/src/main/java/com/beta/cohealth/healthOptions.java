package com.beta.cohealth;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
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
                //mTextView = (TextView) stub.findViewById(R.id.text);
                addWater = (TextView) stub.findViewById(R.id.addWater);
                joinEvent = (TextView) stub.findViewById(R.id.joinEvent);

                addWater.setOnClickListener(healthOptions.this);

            }
        });
    }

    public void onClick(View view) {

        if(view instanceof TextView) {
            //Intent intentConfirmActivity = new Intent(healthOptions.this);

            switch (view.getId()) {
                case R.id.addWater:
                    setContentView(R.layout.activity_add_water);
                    break;
                case R.id.joinEvent:
                    Intent intent1 = new Intent(this, Home.class);
                    startActivity(intent1);
                default:
                    break;
            }
        }
    }
}
