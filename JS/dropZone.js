document.addEventListener("DOMContentLoaded", () => {
  const dropZone = document.getElementById("dropZone");
  const uploadedFilesContainer = document.getElementById("uploadedFiles");

  dropZone.addEventListener("dragover", (event) => {
      event.preventDefault();
      dropZone.style.backgroundColor = "#e2eaf1";
  });

  dropZone.addEventListener("dragleave", () => {
      dropZone.style.backgroundColor = "transparent";
  });

  dropZone.addEventListener("drop", (event) => {
      event.preventDefault();
      dropZone.style.backgroundColor = "transparent";
      const files = event.dataTransfer.files;

      for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const fileName = file.name;

          // Отправка файла на сервер
          const formData = new FormData();
          formData.append("file", file);

          fetch("/saveFile.php", {
              method: "POST",
              body: formData
          })
          .then(response => response.text())
          .then(savedFileName => {
              // Добавление ссылки на загруженный файл на страницу
              const link = document.createElement("a");
              link.href = `download.php?file=${savedFileName}`;
              link.textContent = fileName;
              uploadedFilesContainer.appendChild(link);
              uploadedFilesContainer.appendChild(document.createElement("br"));
          })
          .catch(error => console.error(error));
      }
  });
});
