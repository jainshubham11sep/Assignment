const categoryController=require('../controllers/categoryController.js');
const SubCategoryController=require('../controllers/subCategoryController.js')

const router=require('express').Router();

// router for category

router.post('/addcategory',categoryController.addCategory);
router.get('/getcategory/:id',categoryController.getCategoryData);
router.put("/updatecategory",categoryController.updateCategoryData);
router.delete("/deletecategory",categoryController.updateCategoryData);

// router for sub category

router.post('/addsubcategory',SubCategoryController.addSubCategory);
router.get('/getsubcategory/:id',SubCategoryController.getSubCategoryData);
router.put("/updatesubcategory",SubCategoryController.updateSubCategoryData);
router.delete("/deletesubcategory",SubCategoryController.deleteSubCategoryData);


module.exports=router;