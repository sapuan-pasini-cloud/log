function doGet(e) {
  var template = HtmlService.createTemplateFromFile('index');
  var htmlOutput = template.evaluate()
    .setTitle('Verifikasi Password')
    .setWidth(300)
    .setHeight(150);
  return htmlOutput;
}

function verifyPassword(password) {
  // Ganti password yang diharapkan di sini
  var expectedPassword = 'password123';

  if (password === expectedPassword) {
    var template = HtmlService.createTemplateFromFile('success');
    var htmlOutput = template.evaluate()
      .setTitle('Verifikasi Berhasil')
      .setWidth(300)
      .setHeight(150);

    var output = HtmlService.createHtmlOutput();
    output.setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .append(htmlOutput.getContent())
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');

    // Tambahkan cookie untuk menandai bahwa password sudah diverifikasi
    output.addCookie(Session.getActiveUser().getEmail(), 'true', 3600);

    return output;
  } else {
    var template = HtmlService.createTemplateFromFile('failure');
    var htmlOutput = template.evaluate()
      .setTitle('Verifikasi Gagal')
      .setWidth(300)
      .setHeight(150);

    return htmlOutput;
  }
}
