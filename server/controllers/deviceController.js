const uuid = require('uuid');
const path = require('path');
const { Device, DeviceInfo } = require('../models/models');
const ApiError = require('../error/ApiError');
class deviceController {
  async create(req, res, next) {
    try {
      const { name, price, typeId, brandId, info } = req.body;
      const { img } = req.files;
      const fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const device = await Device.create({ name, price, typeId, brandId, info, img: fileName });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) => {
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          });
        });
      }
      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    let { typeId, brandId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = limit * page - limit;
    let devices;
    if (!typeId && !brandId) {
      devices = await Device.findAndCountAll({ limit, offset });
    }
    if (!typeId && brandId) {
      devices = await Device.findAndCountAll({ where: { brandId }, limit, offset });
    }
    if (typeId && !brandId) {
      devices = await Device.findAndCountAll({ where: { typeId }, limit, offset });
    }
    if (typeId && brandId) {
      devices = await Device.findAndCountAll({ where: { typeId, brandId }, limit, offset });
    }
    return res.json(devices);
  }

  async getDevice(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: 'info' }],
    });
    return res.json(device);
  }
}

module.exports = new deviceController();
