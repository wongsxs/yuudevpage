module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    status: "success",
    code: "00",
    message: "Photobox Self Service Duitku Callback Endpoint Ready",
    merchantCode: "DS34193",
    domain: "yuudev.page2.id"
  });
};
