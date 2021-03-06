const categoryController=require('../controllers/categoryController.js');
const SubCategoryController=require('../controllers/subCategoryController.js')

const router=require('express').Router();

// router for category

router.post('/addcategory',categoryController.addCategory);
router.get('/getcategory/:cat_id',categoryController.getCategoryData);
router.put("/updatecategory",categoryController.updateCategoryData);
router.delete("/deletecategory",categoryController.deleteCategoryData);

// router for sub category

router.post('/addsubcategory',SubCategoryController.addSubCategory);
router.get('/getsubcategory/:sub_cat_id',SubCategoryController.getSubCategoryData);
router.put("/updatesubcategory",SubCategoryController.updateSubCategoryData);
router.delete("/deletesubcategory",SubCategoryController.deleteSubCategoryData);


module.exports=router;
