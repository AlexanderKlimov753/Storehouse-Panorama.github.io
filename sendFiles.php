<?php
$$uploadDirectory = 'D:/Alexandr/safeFiles/';

if (isset($_GET['file'])) {
    $fileName = $_GET['file'];
    $filePath = $uploadDirectory . $fileName;

    if (file_exists($filePath)) {
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="' . $fileName . '"');
        header('Content-Length: ' . filesize($filePath));
    
        readfile($filePath);
        exit;
    }
}
?>
