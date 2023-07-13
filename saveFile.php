<?php
$$uploadDirectory = 'D:/Alexandr/safeFiles/';

if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'GET') {
    $file = $_FILES['file'];

    if ($file['error'] === UPLOAD_ERR_OK) {
        $fileName = $file['name'];
        $savedFileName = $uploadDirectory . $fileName;

        if (move_uploaded_file($file['tmp_name'], $savedFileName)) {
            echo $fileName; // Returns the saved file name to the client
        }
    }
}
?>
