const {Router} = require('express');
const { check } = require('express-validator');
const { getCategorias, getCategoriaPorId, postCategoria, putCategoria, deleteCategoria } = require('../controllers/categoria');
const { existeCategoriaPorId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/', getCategorias);

router.get('/:id', [
    check('id', 'por favor ingrese un nombre valido').isMongoId(),
    check('id').custom(existeCategoriaPorId),
    validarCampos
], getCategoriaPorId);

router.post('/agregar', [
    validarJWT,
    check('nombre', 'por favor ingrese un nombre valido').not().isEmpty(),
    validarCampos
], postCategoria);

router.put('/editar/:id', [
    validarJWT,
    check('id', 'por favor ingrese un id valido').isMongoId(),
    check('nombre', 'por favor ingrese un nombre valido').not().isEmpty(),
    check('id').custom(existeCategoriaPorId),
    validarCampos
], putCategoria);

router.delete('/eliminar/:id', [
    validarJWT,
    check('id', 'por favor ingrese un id valido').isMongoId(),
    check('id').custom(existeCategoriaPorId),
    validarCampos
], deleteCategoria);

module.exports = router;