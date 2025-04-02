function videoModal() {
  return {
    showModal: false,
    selectedVideo: null,
    searchTerm: '',
    videos: [
      { id: 1, title: 'Descrição do item 1', videoId: '4pDOo4ftzmE', pdf: 'pdfs/item1.pdf' },
      { id: 2, title: 'Descrição do item 2', videoId: '3tmd-ClpJxA', pdf: 'pdfs/item2.pdf' },
      { id: 3, title: 'Descrição do item 3', videoId: 'L_jWHffIx5E', pdf: 'pdfs/item3.pdf' },
      { id: 4, title: 'Descrição do item 4', videoId: 'eVTXPUF4Oz4', pdf: 'pdfs/item4.pdf' },
      { id: 5, title: 'Descrição do item 5', videoId: 'fLexgOxsZu0', pdf: 'pdfs/item5.pdf' },
      { id: 6, title: 'Descrição do item 6', videoId: '9bZkp7q19f0', pdf: 'pdfs/item6.pdf' },
      { id: 7, title: 'Descrição do item 7', videoId: 'ktvTqknDobU', pdf: 'pdfs/item7.pdf' },
      { id: 8, title: 'Descrição do item 8', videoId: 'RgKAFK5djSk', pdf: 'pdfs/item8.pdf' },
      { id: 9, title: 'Descrição do item 9', videoId: 'OPf0YbXqDm0', pdf: 'pdfs/item9.pdf' },
      { id: 10, title: 'Descrição do item 10', videoId: '2Vv-BfVoq4g', pdf: 'pdfs/item10.pdf' },
      { id: 11, title: 'Descrição do item 11', videoId: 'JGwWNGJdvx8', pdf: 'pdfs/item11.pdf' },
      { id: 12, title: 'Descrição do item 12', videoId: '60ItHLz5WEA', pdf: 'pdfs/item12.pdf' },
      { id: 13, title: 'Descrição do item 13', videoId: 'hT_nvWreIhg', pdf: 'pdfs/item13.pdf' },
      { id: 14, title: 'Descrição do item 14', videoId: 'YqeW9_5kURI', pdf: 'pdfs/item14.pdf' },
      { id: 15, title: 'Descrição do item 15', videoId: 'nYh-n7EOtMA', pdf: 'pdfs/item15.pdf' },
      { id: 16, title: 'Descrição do item 16', videoId: 'pRpeEdMmmQ0', pdf: 'pdfs/item16.pdf' },
      { id: 17, title: 'Descrição do item 17', videoId: 'uelHwf8o7_U', pdf: 'pdfs/item17.pdf' },
      { id: 18, title: 'Descrição do item 18', videoId: 'CevxZvSJLk8', pdf: 'pdfs/item18.pdf' },
      { id: 19, title: 'Descrição do item 19', videoId: 'fRh_vgS2dFE', pdf: 'pdfs/item19.pdf' },
      { id: 20, title: 'Descrição do item 20', videoId: 'VbfpW0pbvaU', pdf: 'pdfs/item20.pdf' },
      { id: 21, title: 'Descrição do item 21', videoId: 'SlPhMPnQ58k', pdf: 'pdfs/item21.pdf' },
      { id: 22, title: 'Descrição do item 22', videoId: 'FM7MFYoylVs', pdf: 'pdfs/item22.pdf' },
      { id: 23, title: 'Descrição do item 23', videoId: '09R8_2nJtjg', pdf: 'pdfs/item23.pdf' },
      { id: 24, title: 'Descrição do item 24', videoId: '450p7goxZqg', pdf: 'pdfs/item24.pdf' },
      { id: 25, title: 'Descrição do item 25', videoId: 'iS1g8G_njx8', pdf: 'pdfs/item25.pdf' },
      { id: 26, title: 'Descrição do item 26', videoId: 'MYSVMgRr6pw', pdf: 'pdfs/item26.pdf' },
      { id: 27, title: 'Descrição do item 27', videoId: 'hLQl3WQQoQ0', pdf: 'pdfs/item27.pdf' },
      { id: 28, title: 'Descrição do item 28', videoId: 'uelHwf8o7_U', pdf: 'pdfs/item28.pdf' },
      { id: 29, title: 'Descrição do item 29', videoId: 'YykjpeuMNEk', pdf: 'pdfs/item29.pdf' },
      { id: 30, title: 'Descrição do item 30', videoId: '34Na4j8AVgA', pdf: 'pdfs/item30.pdf' }
    ],
    get filteredVideos() {
      const query = this.searchTerm.toLowerCase();
      return this.videos.filter(v => {
        return (
          v.title.toLowerCase().includes(query) ||
          v.id.toString().includes(query)
        );
      });
    }
  };
}

<><script>
  let currentProgress = 0;
  let isOpen = false;

  function simulateProgress() { }
  if (currentProgress {">"}= 100) return;
  currentProgress += 20;
  if (currentProgress {">"} 100) currentProgress = 100;
  document.getElementById("progressBar").style.width = currentProgress + "%";
  document.getElementById("progressText").textContent = currentProgress + "%";
  {"}"}

  function togglePDFs() { }
  const container = document.getElementById("pdfContainer");
  container.classList.toggle("max-h-0");
  container.classList.toggle("max-h-60");
  {"}"}
</script><script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script><script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script></>