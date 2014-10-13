package com.beta.cohealth;

import android.app.Activity;
import android.content.Intent;
import android.media.Image;
import android.os.Bundle;
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
    private ImageView waterImage;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
        final WatchViewStub stub = (WatchViewStub) findViewById(R.id.watch_view_stub);
        stub.setOnLayoutInflatedListener(new WatchViewStub.OnLayoutInflatedListener() {
            @Override
            public void onLayoutInflated(WatchViewStub stub) {
                mTextView = (TextView) stub.findViewById(R.id.text);
                buttonSuccess = (Button) findViewById(R.id.buttonSuccess);
            }
        });
    }

    public void onClick(View view) {

        if(view instanceof Button) {
            Intent intentConfirmActivity = new Intent(Home.this, ConfirmationActivity.class);
            int animation;
            String message = "";

            switch (view.getId()) {
                case R.id.buttonSuccess:
                    animation = ConfirmationActivity.SUCCESS_ANIMATION;
                    message = "8oz water added";
                    break;
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
