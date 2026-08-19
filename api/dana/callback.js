module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    resultInfo: {
      resultStatus: "S",
      resultCodeId: "00000000",
      resultCode: "SUCCESS",
      resultMsg: "DANA Enterprise Webhook Callback Endpoint Ready"
    },
    partnerId: "DANA_ENTERPRISE",
    status: "SUCCESS"
  });
};
