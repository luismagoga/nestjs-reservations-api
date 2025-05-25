const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  tenantId: String,
  apiKey: String,
  apiSecret: String,
});

const Company = mongoose.model("Company", CompanySchema);

mongoose.connect("mongodb://localhost:27017/reservations").then(async () => {
  await Company.deleteMany({});
  await Company.create({
    tenantId: "tenant-123",
    apiKey: "api-key-123",
    apiSecret: "secret-123",
  });
  console.log("Seed data inserted");
  process.exit();
});
