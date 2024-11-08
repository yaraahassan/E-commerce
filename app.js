let products=[
  {
    id:1,
    title:"AIR FORCE",
    price:199,
    colors:[
      { code:"black",
        img:"img/air.png",

      },
      { code:"blue",
        img:"img/air2.png",

      },
    ],
  },
  {
    id:2,
    title:"JORDAN",
    price:200,
    colors:[
      { code:"white",
        img:"img/jordan.png",

      },
      { code:"green",
        img:"img/jordan2.png",

      },
    ],
  },
  {
    id:3,
    title:"BLAZER",
    price:255,
    colors:[
      { code:"white",
        img:"img/blazer.png",

      },
      { code:"green",
        img:"img/blazer2.png",

      },
    ],
  },
  {
    id:4,
    title:"CRATER",
    price:300,
    colors:[
      { code:"black",
        img:"img/crater.png",

      },
      { code:"gray",
        img:"img/crater2.png",

      },
    ],
  },
  {
    id:5,
    title:"HIPPIE",
    price:300,
    colors:[
      { code:"gray",
        img:"img/hippie.png",

      },
      { code:"black",
        img:"img/hippie2.png",

      },
    ],
  },
]

 let choosenProduct=products[0];
 productTitle=document.querySelector('.product-title');
 productPrice=document.querySelector('.product-price');
 productColor=document.querySelectorAll('.color');
 productSize=document.querySelectorAll('.sizes');
 productImg=document.querySelector('.product-img');
 slidder_wrapper = document.querySelector(".slidder-wrapper");
 item=document.querySelectorAll('.item');

item.forEach((element,i)=>{ 
  element.addEventListener('click',()=>{
    // change slide
    slidder_wrapper.style.transform= `translateX(${-100*i}vw)`;
    //change product

    choosenProduct=products[i];
    //change text of current product
    productTitle.textContent=choosenProduct.title;
    productPrice.textContent="$" +choosenProduct.price;
    productImg.src=choosenProduct.colors[0].img; 

    //assign a new colors
      
    productColor.forEach((color,i)=>{
        color.style.backgroundColor=choosenProduct.colors[i].code;
    });
  });
});
    productColor.forEach((color,index)=>{
      color.addEventListener('click',()=>{
        productImg.src=choosenProduct.colors[index].img;
      });
    });
    

   productSize.forEach((size) => {
    size.addEventListener("click", () => {
      // إعادة تعيين الألوان لجميع الأحجام
      productSize.forEach((s) => {
        s.style.backgroundColor = "white";
        s.style.color = "black";
      });
      
      // تفعيل الحالة المختارة للحجم الحالي
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });
  
  //close

  payment=document.querySelector('.payment');
  product_button=document.querySelector('.product-btn');
  closen=document.querySelector('.close');

  // console.log(payment);
  product_button.addEventListener('click',()=>{
        payment.style.display="flex"
  });

  closen.addEventListener('click',()=>{
        payment.style.display="none"
  });