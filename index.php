<?php
include 'index.html';
define("TOKEN","51foxy");

function checkSignature()
{
    //��GET�����ж�ȡ�����ֶε�ֵ
    $signature = $_GET["signature"];
    $timestamp = $_GET["timestamp"];
    $nonce = $_GET["nonce"];

    //��ȡԤ�����TOKEN
    $token = TOKEN;
    //�������������
    $tmpArr = array($token, $timestamp, $nonce);
    sort($tmpArr, SORT_STRING);
    //�������ֶν���sha1����
    $tmpStr = implode( $tmpArr );
    $tmpStr = sha1( $tmpStr );

    //�ж��ҷ�����Ľ���Ƿ��΢�Ŷ˼���Ľ�����
    //��������ֻ��΢�Ŷ˺��ҷ��˽��token���Ա�,��֤�����Ƿ�����΢�Źٷ�.
    if( $tmpStr == $signature ){
        return true;
    }else{
        return false;
    }
}

if(checkSignature()){
    echo $_GET["echostr"];
}
else{
    echo 'error';
}
