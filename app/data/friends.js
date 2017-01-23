var friends = [{
  "name":"Albert Einstein",
  "photo":"https://www.google.com/imgres?imgurl=https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg&imgrefurl=https://commons.wikimedia.org/wiki/File:Albert_Einstein_Head.jpg&h=4333&w=3250&tbnid=-K1pnu4XU4UtoM:&vet=1&tbnh=186&tbnw=139&docid=Kbg_hSWpflFMxM&itg=1&usg=__V_nW7cFFzCqN0rJ1bdzi02nhpHY=&sa=X&ved=0ahUKEwj73LqtgsjRAhUC5CYKHTT8AfQQ_B0IpgIwEQ&ei=D3J9WLuZJYLImwG0-IegDw",
  "scores":[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
},
{
  "name":"Abraham Lincoln",
  "photo":"https://www.google.com/imgres?imgurl=http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjMzODg2NTc0MDky.jpg&imgrefurl=http://www.biography.com/people/abraham-lincoln-9382540&h=1200&w=1200&tbnid=zWnvfxl1kz-pXM:&vet=1&tbnh=186&tbnw=186&docid=eEXHphZCr_8HXM&itg=1&usg=__-tWDZvrlxAeK_7YWYsEWUYChbls=&sa=X&ved=0ahUKEwjpktK4gsjRAhVGSiYKHUtNC4cQ_B0ImgIwDg&ei=J3J9WKnjA8aUmQHLmq24CA",
  "scores":[4, 5, 3, 3, 4, 5, 1, 4, 3, 5]
},
{
  "name":"George Washington",
  "photo":"https://www.google.com/imgres?imgurl=https://www.whitehouse.gov/sites/whitehouse.gov/files/images/first-family/01_george_washington%255B1%255D.jpg&imgrefurl=https://www.whitehouse.gov/1600/presidents/georgewashington&h=452&w=800&tbnid=hmUs8O241f-T0M:&vet=1&tbnh=113&tbnw=199&docid=_2sMu55BXHww7M&itg=1&usg=__KLSc-e2SygyAD-L0YLgQUNJJFAo=&sa=X&ved=0ahUKEwiLp_LWgsjRAhXESCYKHQ8PA4gQ_B0IlAIwDg&ei=ZnJ9WIvcHsSRmQGPnozACA",
  "scores":[3, 4, 2, 2, 3, 4, 5, 3, 2, 4]
},
{
  "name":"Leonardo da Vinci",
  "photo":"https://www.google.com/imgres?imgurl=http://www.customasapblog.com/wp-content/uploads/2011/11/da-vinci-alam_159842t.jpg&imgrefurl=https://www.codeavengers.com/c/gabrielj/leonardodavinci.html&h=403&w=300&tbnid=-h00Ax9m9g8mdM:&vet=1&tbnh=186&tbnw=138&docid=l6Zi4Xl6c_j-xM&itg=1&usg=__kdBgzIo66AeijC9k2IMTgBYwt-k=&sa=X&ved=0ahUKEwj_-cDkgsjRAhUHOyYKHUMNCS8Q_B0IkAIwDA&ei=g3J9WL-sA4f2mAHDmqT4Ag",
  "scores":[ 2, 3, 1, 1, 2, 3, 4, 2, 1, 3]
},
{
  "name":"Aristotle",
  "photo":"https://www.google.com/imgres?imgurl=http://www.thefamouspeople.com/profiles/images/aristotle-17.jpg&imgrefurl=http://www.thefamouspeople.com/profiles/aristotle-116.php&h=625&w=750&tbnid=isVD4uEaVzt-BM:&vet=1&tbnh=166&tbnw=200&docid=dUk0_NAZXlHO_M&itg=1&usg=__hcCd1UMRgimmGxviCTcxr9r-fmk=&sa=X&ved=0ahUKEwimwpnwgsjRAhXG4yYKHZelAeUQ_B0IlAIwDA&ei=m3J9WOaII8bHmwGXy4aoDg",
  "scores":[ 1, 2, 5, 5, 1, 2, 3, 1, 5, 2]
},
{
  "name":"Winston Churchill",
  "photo":"https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=Winston+Churchill&stick=H4sIAAAAAAAAAG1SP2_UMBzFEn9at0NlUIdMEerAxCW2c7lITCAGBBUSdGI5NYmTS-Kcc7G5XPoxEBIfgYWBjZmR-wCMDN36DRjpFf8sIbE9P_s9v9-z9-483Ju0k2BGNx09Marzw8BvlTZ-cd6q99rvhOqk8Kulv6i0Uf24Rfd2gjrbWFReLLboxoTxPreQy3Lq9ueW3F1iYZyleov2dzBnTcgtHcoBbOu-BK9ZJrcI3-yvtWRgx-aysDAq45UL0WhgV23thElMuV1EwyLQELqO0pmF2RAGIF121ELal3MbNUlLLiFqLwGyLo4tTJqgsIdDPmURjLC5aGHysYVLUtZBasrCHnTrdQt98HAAHafcWRjauA5qbQszRQZm1_NZmLOksb4sT3on0ymUxHmtXXWOTVcRA7fGPSArNy5OkK9tnaymvIGXmMoC_kDUBgsXfsUu0Xd0cHT1-9d97xv68OXHT_QV4dtPhTbkM8IHb4U5U6cqr4qRfELkI8JHr5TSQo5vhDw3Ij9T5ATffb40lRmJhw89G4kNj255GLsVefev2UvyAu-fijYVvX5dkCcYP1NSisxUakke42OPTDJHTP7-92vHB_g__OEfXmopyjADAAA",
  "scores":[3, 4, 2, 4, 3, 5, 2, 2, 5, 4]
},
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores": [2, 3, 1, 3, 2, 4, 1, 1, 4, 3]
},
{
  "name":"John F. Kennedy",
  "photo":"https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=John+F.+Kennedy&stick=H4sIAAAAAAAAAG1SP2_UMBzFEn9at0NlUIdMEerAxCW2c7lITKAOCCok6MRyahInl8Q552JzufRjIKR-BJYO3ZgZuQ_AyMDGN2CkBf-MkNien_2e3-_ZO3ce7k7aSZCzJuT0yKjODwO_Vdr4xVmr3mm_E6qTwq-W_qLSRvXjFt27UdTZxqLyfLFFOzeI8T63kMty6vbnlpzRTWdhnKV6i_7ebelQDmBb9yV4zTK5Rfj3_lpLBnZsLgsLozJeuRCNBnbV1k6YxJTbRTQsAg2h6yidWZgNYQDSZUctpH05t1GTtOQSovYSIOvi2MKkCQp7OORTFsEIm_MWJh9buCRlHaSmLOxBt1630AcPB9Bxyp2FoY3roNa2MFNkYHY9n4U5Sxrry_KkdzKdQkmc19pV59h0FTFwa9wDsnLj4gT52tbJasobeImpLOAPRG2wcOFX7Dv6jPYOfvz8dt_7hN5ffvmKrhC-_VRoQz4ivPdGmFN1ovKqGMkFIh8QPniplBZyfC3kmRH5qSJH-O7x0lRmJB7e92wkNjy65WHsVuTtv2YvyHO8eyLaVPT6VUGeYPxMSSkyU6kleYwPPTLJHDH589-vHR_g__D7vwCIPvTwMQMAAA",
  "scores":[1, 2, 2, 2, 1, 2, 2, 1, 2, 2]
},
{
  "name":"Charles Darwin",
  "photo":"https://www.google.com/imgres?imgurl=http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTE5NDg0MDU0OTM4NjE3MzU5.jpg&imgrefurl=http://www.biography.com/people/charles-darwin-9266433&h=1200&w=1200&tbnid=GA4QCm4_F8Fw-M:&vet=1&tbnh=186&tbnw=186&docid=WOvCaLPl-_7TmM&itg=1&usg=__NnyLXGqSbO1oETVgce0d6zGSBpg=&sa=X&sqi=2&ved=0ahUKEwj6xqz-gsjRAhWG2SYKHfguAcoQ_B0IjgIwDA&ei=uXJ9WLqGD4azmwH43YTQDA",
  "scores":[2, 2, 3, 4, 1, 4, 5, 5, 2, 3]
},
{
  "name":"Nelson Mandela",
  "photo":"https://www.google.com/imgres?imgurl=http://www.idainternational.org/wp-content/uploads/2015/04/Nelson-Mandela.jpg&imgrefurl=http://www.idainternational.org/ada/nelson-mandela/&h=900&w=779&tbnid=XaL_mqDQ7cPuKM:&vet=1&tbnh=186&tbnw=160&docid=I56eYk_8uVpKWM&itg=1&usg=__LWqfVYM2gAAlyMh9lh0RxqGSfT8=&sa=X&sqi=2&ved=0ahUKEwji_6Wcg8jRAhUIPCYKHXp8AggQ_B0IrwIwEw&ei=-HJ9WOKjA4j4mAH6-IlA",
  "scores": [1, 2, 2, 1, 2, 1, 2, 1, 1, 1]
}
];


//export the friends data so it is accessible in other files using require
module.exports = friends;




