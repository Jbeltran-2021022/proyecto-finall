const { Router } = require('express');
const { check } = require('express-validator');
const { getProductos, getProductoPorId, postProducto, putProducto, deleteProducto } = require('../controllers/producto');
const { existeProductoPorId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { esAdminRole } = require('../middlewares/validar-role');

const router = Router();

router.get('/', getProductos);

router.get('/:id', [
    check('id', 'por favor ingrese un id valido').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos
], getProductoPorId);

router.post('/agregar', [
    validarJWT,
    check('nombre', 'por favor ingrese un nombre valido').not().isEmpty(),
    validarCampos
], postProducto);

router.put('/editar/:id', [
    validarJWT,
    check('id', 'por favor ingrese un nombre valido').isMongoId(),
    check('nombre', 'por favor ingrese un nombre valido').not().isEmpty(),
    check('id').custom(existeProductoPorId),
    validarCampos
], putProducto);

router.delete('/eliminar/:id', [
    validarJWT,
    esAdminRole,
    check('id', 'por favor ingrese un nombre valido').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos
], deleteProducto);

module.exports = router;