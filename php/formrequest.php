<?php
if (isset($_POST['submitted'])) {

            // Sanitize

            function cleanInput($input) {
 
  $search = array(
    '@<script[^>]*?>.*?</script>@si',   // Strip out javascript
    '@<[\/\!]*?[^<>]*?>@si',            // Strip out HTML tags
    '@<style[^>]*?>.*?</style>@siU',    // Strip style tags properly
    '@<![\s\S]*?--[ \t\n\r]*>@',         // Strip multi-line comments
    '![ \t]*//.*[ \t]*[\r\n]!'          // Strip single-line comments
  );

    $input = trim($input);
    $input = stripslashes($input);
    $input = strip_tags($input);
    $output = preg_replace($search, '', $input);
    return $output;
  }

  $name = cleanInput(htmlspecialchars($_POST['name']));
            $mailFrom = cleanInput(htmlspecialchars($_POST['email']));
            $subject = cleanInput(htmlspecialchars($_POST['subject']));
            $message = cleanInput(htmlspecialchars($_POST['message']));


            $mailTo = "cb@creeperbuddy.com";
            $headers = "From: ".$name."at ".$mailFrom;
            $txt = $name." has messaged you from creeperbuddy.com"."\n\n".$message;

           if (mail($mailTo, $subject, $txt, $headers)) {
               header("Location: /contact/?mailsent=confirmed");
           } else {
               header("Location: /contact/?mailsent=error");
           }
            
}       
?>