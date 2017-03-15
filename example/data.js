var trees = [{
     "id": 1,
     "label": "系统管理",
     "parent_id": null,
     "url": null,
     "depth": 0,
     "child_num": 3,
     "description": "系统管理",
     "children": [{
         "id": 2,
         "label": "基础管理",
         "parent_id": 1,
         "url": null,
         "depth": 1,
         "child_num": 5,
         "description": "基础管理",
         "children": [{
             "id": 3,
             "label": "菜单管理",
             "parent_id": 2,
             "url": "/menus",
             "depth": 2,
             "child_num": 0,
             "description": "菜单管理",
         }, {
             "id": 4,
             "label": "角色管理",
             "parent_id": 2,
             "url": "/roles",
             "depth": 2,
             "child_num": 0,
             "description": "角色管理",
         }, {
             "id": 5,
             "label": "用户管理",
             "parent_id": 2,
             "url": "/users",
             "depth": 2,
             "child_num": 0,
             "description": "用户管理",
         }]
     }]
 }, {
     "id": 6,
     "label": "客户管理",
     "parent_id": null,
     "url": null,
     "depth": 0,
     "child_num": 2,
     "description": "客户管理",
     "children": [{
         "id": 7,
         "label": "客户列表",
         "parent_id": 6,
         "url": "/customs",
         "depth": 1,
         "child_num": 0,
         "description": "客户列表",
     }]
 }, {
     "id": 8,
     "label": "模板管理",
     "parent_id": null,
     "url": null,
     "depth": 0,
     "child_num": 1,
     "description": "模板管理",
     "children": [{
         "id": 9,
         "label": "模板管理",
         "parent_id": 8,
         "url": "/doc_templates",
         "depth": 1,
         "child_num": 0,
         "description": "模板管理",
     }]
 }, {
     "id": 10,
     "label": "基础业务管理",
     "parent_id": null,
     "url": null,
     "depth": 0,
     "child_num": 2,
     "description": "基础业务管理",
     "children": [{
         "id": 11,
         "label": "基础信息管理",
         "parent_id": 10,
         "url": null,
         "depth": 1,
         "child_num": 2,
         "description": "基础信息管理",
         "children": [{
             "id": 12,
             "label": "货币管理",
             "parent_id": 11,
             "url": "/currencies",
             "depth": 2,
             "child_num": 0,
             "description": "货币管理",
         }, {
             "id": 13,
             "label": "交易类型管理",
             "parent_id": 11,
             "url": "/dealtypes",
             "depth": 2,
             "child_num": 0,
             "description": "交易类型管理",
         }]
     }, {
         "id": 14,
         "label": "产品管理",
         "parent_id": 10,
         "url": null,
         "depth": 1,
         "child_num": 2,
         "description": "产品管理",
         "children": [{
             "id": 15,
             "label": "产品类别管理",
             "parent_id": 14,
             "url": "/productTypes",
             "depth": 2,
             "child_num": 0,
             "description": "产品类别管理",
         }, {
             "id": 16,
             "label": "产品管理",
             "parent_id": 14,
             "url": "/products",
             "depth": 2,
             "child_num": 0,
             "description": "产品管理",
         }]
     }]
 }]