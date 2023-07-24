#!/bin/bash

if [ -d "/home/coder/project/workspace/angularapp" ]
then
    echo "project folder present"
    cp /home/coder/project/workspace/karma/karma.conf.js /home/coder/project/workspace/angularapp/karma.conf.js;
    

    # checking for login component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/auth/login" ]
    then
        cp /home/coder/project/workspace/karma/login.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/auth/login/login.component.spec.ts;
    else
        echo "FE_loginTest FAILED";
    fi 

    # checking for signup component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/auth/signup" ]
    then
        cp /home/coder/project/workspace/karma/signup.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/auth/signup/signup.component.spec.ts;
    else
        echo "FE_signupTest FAILED";
    fi 

    # checking for addons component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/adminside/addons" ]
    then
        cp /home/coder/project/workspace/karma/addons.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/adminside/addons/addons.component.spec.ts;
    else
        echo "FE_addonsTest FAILED";
    fi 

     # checking for postpaid component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/adminside/postpaid" ]
    then
        cp /home/coder/project/workspace/karma/postpaid.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/adminside/postpaid/postpaid.component.spec.ts;
    else
        echo "FE_postpaidTest FAILED";
    fi

        # checking for prepaid component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/adminside/prepaid" ]
    then
        cp /home/coder/project/workspace/karma/prepaid.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/adminside/prepaid/prepaid.component.spec.ts;
    else
        echo "FE_prepaidTest FAILED";
    fi


          # checking for recharge component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/adminside/recharge" ]
    then
        cp /home/coder/project/workspace/karma/recharge.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/adminside/recharge/recharge.component.spec.ts;
    else
        echo "FE_rechargeTest FAILED";
    fi


    # checking for adminreview component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/adminside/adminreview" ]
    then
        cp /home/coder/project/workspace/karma/adminreview.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/adminside/adminreview/adminreview.component.spec.ts;
    else
        echo "FE_adminReviewTest FAILED";
    fi

    
    # checking for customeraddons component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/customerside/customeraddons" ]
    then
        cp /home/coder/project/workspace/karma/customeraddons.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/customerside/customeraddons/customeraddons.component.spec.ts;
    else
        echo "FE_customerAddonsTest FAILED";
    fi 

    # checking for customerprepaid component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/customerside/customerprepaid" ]
    then
        cp /home/coder/project/workspace/karma/customerprepaid.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/customerside/customerprepaid/customerprepaid.component.spec.ts;
    else
        echo "FE_customerPrepaidTest FAILED";
    fi 

  # checking for customerpostpaid component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/customerside/customerpostpaid" ]
    then
        cp /home/coder/project/workspace/karma/customerpostpaid.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/customerside/customerpostpaid/customerpostpaid.component.spec.ts;
    else
        echo "FE_customerPostpaidTest FAILED";
    fi 

   # checking for customerreview component
    if [ -d "/home/coder/project/workspace/angularapp/src/app/components/customerside/customerreview" ]
    then
        cp /home/coder/project/workspace/karma/customerreview.component.spec.ts /home/coder/project/workspace/angularapp/src/app/components/customerside/customerreview/customerreview.component.spec.ts;
    else
        echo "FE_customerReviewTest FAILED";
    fi 

    cd /home/coder/project/workspace/angularapp/;
    npm test;
else   
    echo "FE_loginTest FAILED";
    echo "FE_signupTest FAILED";
    echo "FE_addonsTest FAILED";
    echo "FE_postpaidTest FAILED";
    echo "FE_prepaidTest FAILED";
    echo "FE_rechargeTest FAILED";
    echo "FE_adminReviewTest FAILED";
    echo "FE_customerAddonsTest FAILED";
    echo "FE_customerPrepaidTest FAILED";
    echo "FE_customerPostpaidTest FAILED";
    echo "FE_customerReviewTest FAILED";
fi

