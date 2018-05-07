<?php
    /*
    * Script for sending orders from Landing Page.
    * (c) Airomad at mmstudio.com.ua 28.04.2017
    *
    * Possible statuses:
    *   success                 - email was sent successfully
    *   Errors                  - email was not sent
    *
    * Errors:
    *   SERVICE_ERROR           - script can't send an email. Maybe incorrect data in Config.php
    *   INCORRECT_INPUT_DATA    - script got incorrect NAME or PHONE values
    *
    */
    $DEFAULT_STYLE_JSON = '{"body":{"bg":"f2f6fc","c":"000000"},"footer":{"bg":"e6e9ef","c":"000000"}}';

    if(isset($_GET) && !empty($_GET)) {
        require_once "Config.php";
        require_once "SendMailSmtpClass.php";

        $order_title = (isset($_GET['order_title']) && !empty($_GET['order_title'])) ? trim($_GET['order_title']) : ORDER_MAIL_DEFAULT_TITLE;
        $_GET['order_title'] = NULL;

        $style = (isset($_GET['style']) && !empty($_GET['style']))
            ? json_decode(trim($_GET['style']))
            : json_decode($DEFAULT_STYLE_JSON);
        $_GET['style'] = NULL;

        $fields = array();
        foreach ($_GET as $key => $field) {
            if (!is_null($key)) {
                if (!empty($field)) {
                    $obj = json_decode(trim($field));
                    array_push($fields, $obj);
                }
            }
        }

        $text = create_template_email($order_title, $style, $fields);

        $mailSMTP = new SendMailSmtpClass(ORDER_MAIL_USERNAME,
            ORDER_MAIL_PASSWORD,
            ORDER_MAIL_HOST,
            ORDER_MAIL_SENDER,
            ORDER_MAIL_PORT);

        // заголовок письма
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=" . ORDER_MAIL_CHARSET . "\r\n";
        $headers .= "From: " . ORDER_MAIL_SENDER . "\r\n";
        $result =  $mailSMTP->send(ORDER_MAIL_USERNAME, ORDER_MAIL_SENDER . ': ' . $order_title, $text, $headers);
        if($result === true) {
            $json = array(
                'status' => 'success'
            );
            //echo '{"status": "success"}';
        } else {
            $json = array(
                'status' => 'error',
                'result' => array(
                    'error' => 'SERVICE_ERROR'
                )
            );
            //echo '{"status": "error", "result": {"error": "SERVICE_ERROR"}}';
        }
    } else {
        $json = array(
            'status' => 'error',
            'result' => array(
                'error' => 'EMPTY_PARAMS'
            )
        );
        //echo '{"status": "error", "result": {"error": "INCORRECT_INPUT_DATA"}}';
    }

    header('Content-Type: application/json');
    echo json_encode($json);
    /*
    * Temporary function for email body generation
    */
    function create_template_email($order_title, $style, $fields) {
        date_default_timezone_set('Africa/Nairobi');
        $date = date('H:i:s (Y-m-d)');

        $text = "<div style=\"padding: 20px; background-color: #" . $style->body->bg . "; color: #" . $style->body->c . ";\"><br>";
        $text .= "<div style=\"color: #" . $style->header->c . ";\">";
        $text .= "<center><h1>" . $order_title . "</h1></center>";
        $text .= "</div>";

        foreach ($fields as $field) {
            if (!is_null($field)) {
                $field_formatted = get_field($field);
                if (!is_null($field_formatted))
                    $text .= $field_formatted;
            }
        }
        $text .= "<br>";
        $text .= "Время заявки: " . $date . "<br>";
        $text .= "</div>";
        $text .= "<div style=\"padding: 20px; background-color: #" . $style->footer->bg . "; color: #" . $style->footer->c . ";\">";
        $text .= "<center>" . ORDER_MAIL_SENDER . "<br><a href=\"https:\/\/mmstudio.com.ua/\"><span style=\"font-size: 10px; color: rgba(0, 0, 0, 0.3); text-decoration: none;\">(c) MMStudio Forms</span></a></center>";
        $text .= "</div>";

        return $text;
    }

    function get_field($field) {
        if (empty($field->t) && empty($field->v))
            return NULL;
        if (!empty($field->t)) $text = $field->t . ": "; else $text = ORDER_MAIL_EMPTY_FIELD . ": ";
        if (!empty($field->v)) $text .= $field->v . "<br>"; else $text .= ORDER_MAIL_EMPTY_VALUE . "<br>";
        return $text;
    }
?>
