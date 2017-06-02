<?php

	function submitMessage($direct, $name, $email, $subject, $message) {
			$to = "justin@cruxstudios.ca";
			$subj = $subject;
			$extra = "Reply-To: ".$email."\r\n";			
			$msg = "Name: ".$name."\n\nEmail address: ".$email."\n\nComments: ".$message;
			$go = mail($to,$subj,$msg,$extra);
			header("Location: index.php");
	}

?>