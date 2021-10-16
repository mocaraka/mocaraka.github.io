'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
".git/config": "fc50cbc4ec800918ed6ab7935d102830",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "6cad0fed6f9b541c88f5481fc29fcba6",
".git/logs/HEAD": "0f4e97db00ca62ac1311fe2a525fd3b6",
".git/logs/refs/heads/main": "0f4e97db00ca62ac1311fe2a525fd3b6",
".git/logs/refs/remotes/origin/main": "56aca79ec241c5860c4cac8a02240713",
".git/objects/05/45054e4429bcb49f66ceecb345cbffe6140376": "08f8a94497bf9d2303952f0b97d553c9",
".git/objects/07/cc241a91e1724f6e2ce16ed03b6aeadd3454fc": "54bd7e67ea9a92821f69168800be95dd",
".git/objects/07/d0825a592fee668d81fedff2a3b7a09f3e431f": "cf4359388c8ec9ac73c8a6f47a3e4f32",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/08/272b5ba44b180129030f647395e704af050178": "1378f5c85df93fab1c1ad180b26a1dce",
".git/objects/09/15286ec1bb28746a6a37e1bbcb1a8f196f5789": "2d07f870af2c25d0b4c1c1a0d7c3a255",
".git/objects/0c/1393fe92c112a442d614f3074a5e29139ed878": "e80a88a258ef57a79b80b6b5ca5de6ec",
".git/objects/0d/d2957aacfbdf973406cd352deff9f4212abafa": "161402f49349ea5e06e1fca78fa013d7",
".git/objects/10/ed45582fbc25c8a4f985209ad6cd673efe89e0": "305e27483fbfa8b39e7975a4ceaa46e1",
".git/objects/11/da2d6204a7cdf4a36e74127bc7aadfd601f3dc": "d1d44e3ebd59709c5a2d5af0cce25c16",
".git/objects/12/16645e817f3a915a40e868a39a97ea2084a0ff": "fc64cc526039af9945c2d4ea61e4e4d9",
".git/objects/13/97470fa034cb1f3a89bedc520cece624dba614": "41d70e23ed388ce464890418c13f7c9e",
".git/objects/15/f4a4678d9afc1bf88aaee90c7fba3b09b3a554": "67555cb57fa41d9359a7d4490f77710c",
".git/objects/15/f57629fbd61440ea528102d6a1254208403429": "4dc2840b70961f876de97ac9192f96ef",
".git/objects/17/3d9c91a99007f853d956a5543bd66c611e59f4": "e96fe4405a4538a80afe010e2db03c56",
".git/objects/17/50c8bad8333b180b1437920ac10c03a3884526": "b719e8e15b70c6a9ebc2451a63bc70df",
".git/objects/17/9befc89ba88679178fa4552c2548c97821d912": "126683047c233cc0dd4fe1beb86c82b2",
".git/objects/18/0d41cb260454ff0ff734c1576ab61b1901d0df": "8d7364fccd54e95a06d4b96792a84b08",
".git/objects/1a/346e7c9358b874114f562ce266896872e7ddae": "e5276b7ab91034275479c5c51e17a144",
".git/objects/1a/7a8613bac28931281d05ae89e2fceccbb6fe23": "e069b51bdd1b743eb1a17d6daaf5529e",
".git/objects/1d/612894bc21e26ced02a68fee5431f1d95504bf": "ebc69ba3a9546f4f11fc6b85a8d22893",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/0ea6fe8f78cdab19f04c81b650dcbc5b67cfaa": "634e38ffa4889fe8152a125246528296",
".git/objects/27/e049b238913b08b35a814f0c9b9a8d9fb79d8c": "ccd2cf59f593c440e9c94b858c758801",
".git/objects/2b/b569706a299160a1f918fd1d35d818a68fd574": "f98e9b14e689b5d890ec5aa94e36b00d",
".git/objects/2f/67729b8f9d445c8f60e23d5b08f54f06cda360": "d34a43920c6839de4787f4fc13321126",
".git/objects/30/b8f2abeae377b42dc5f48df31b426d48ea2ed7": "f515f97a3255b98ff4ac0b860e959317",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/97af889788ec7fa849b1bf8a24571ff8d88da9": "1f2a3ec902beb962ee6e8deb137765e8",
".git/objects/35/e05874b352b5480b2096cce8f0c083cae0d0d8": "325c177598d55688d0b12ee6a92f5715",
".git/objects/36/57d73cd31a8292fb482cf36aca397f194b12f3": "8973cdb5877792fba54f67c6c373d4cf",
".git/objects/37/ff1476d437f09d949373867b91f520692b32d7": "79f92cd3bc7e4a850699ebd718aa463d",
".git/objects/39/0056964a59ae33154ef6076ac19f15f973c1c0": "d986e5b5542383c70e7fb300e0e127b5",
".git/objects/39/62ad6beef7f9e52b10c4af64fde6ac4b63ebee": "1177f00ba205df3b6c653eaeea5c57da",
".git/objects/3c/26190fdc609e75f1b6df9ed8f199393a366c3a": "2b7daaf66f12e18f4cd4f0aee945d184",
".git/objects/3e/d799593d8fad249dbefe24c5fa36c57cb88408": "1b904f5bf6e0e37e95cce003209f0918",
".git/objects/43/05d2ce49ca2b0c58d95428aed12a2a7231457a": "a273866715a4d53acac0caa7c13cb203",
".git/objects/44/31166bd6bc9f2a6a881e291c416876d4c79426": "f15601c2c5a6aa6b05a99fe333d18b78",
".git/objects/46/3c88396b6d24ad56b38e93f3880b0fb3c6121b": "59e654878aa81850b7c564827c80ea43",
".git/objects/47/be8932ad96d8c20ef99ff0805622ff2679c54e": "44d05eb5f93279a22d99c8b1c5fe90e6",
".git/objects/48/b0a2c8d69d4b2220a051a67044ea0afa96e02e": "3a0f81a26c255391310eef801b1587b9",
".git/objects/48/b0f4506dcb107a8d5187ee2741146c75466cac": "d565f888512ed158a6cd5f089b14600e",
".git/objects/4a/5b8094ae4a605744f67aa9df1c6b554f3c0664": "276180759e3abbb6a14f9036078ff451",
".git/objects/4c/780e815edf6b3ec3dda7a4a024b554ce8a3c99": "823afa972521857cef820e485443bc49",
".git/objects/4d/34f5d5d62145fbfc6721a016c98db03fbd4921": "e6cd9f8178c86a5e3a738d41799ce4f5",
".git/objects/4e/3a3cff59f415be04928b18cb4567ddec1f9a72": "fadeb4c3449f8bbeced0e1b00b8db80b",
".git/objects/4e/a3e036db97d45fc561042a784b7dd9bbc6dd8b": "5c073ac3dcff6034f1b763fbe5c65178",
".git/objects/4f/829598d8a4904a6b13ac21f2e9e18408d33126": "4f879dba70e2e58a39be43f01e3fba65",
".git/objects/4f/e35562886510ab556cbd53c7d4fb05941f472f": "a5a9e26e37269b7c07a2593093eabead",
".git/objects/53/21ae0db08afa87a1081c755f2adab47cbb297a": "2df97e2a7bd091bee23be24c673775c0",
".git/objects/58/beb8c333c395e6675dc5b368cc1454c2845343": "b4683e9a1b82898e4e4aa430f1b58d31",
".git/objects/5a/a2386577398d5018c791f5f75f4f031fc2fb7f": "b8a830b8743141dac213a53db6ed5dd5",
".git/objects/5e/094eda094865f5635b14b23d06c4ec212c024c": "a80b5670e618e09fd4ffd5ee8ffc41da",
".git/objects/5e/c7cba63e2710601a5dd29f47966edb9d2d0d6c": "16aa820c27eb06a5982d9d4f9437ca23",
".git/objects/5f/bf040bc6c246f2de50de8653ca4929d5368808": "dc6d72cbf786d14df250b37bb7c7f322",
".git/objects/60/0eaa8f55ee4924a350433c07226f11e272111c": "39bc0fa9e6653dfbdf0db6713df77842",
".git/objects/63/0557889f027d6e405b54f94c8997be62893cf7": "3afe7dcd3311c4bfeb36b4ce2369b213",
".git/objects/66/75942acd38ee82723a24e2bcbb59fb7ff72385": "dbd4ab28e61db23c4e77ee97d42c9ddf",
".git/objects/6b/95fa3a64b18dc53693ccc57b5028f951e698b4": "378fa1b73bef3bb27be68cd1d43e6fd3",
".git/objects/6e/ff0f662b983e2bbbed663d9e5fc2565f51575c": "0a94b5231756820276bd8a7c136118b8",
".git/objects/6f/dbf7ff320d5e16b008299546fe5b2f89e06166": "9c32c7c857b441d089bb775ac2af2ac6",
".git/objects/70/46e5e5b2b25c42aca0e2d9d08fcdb8ff9aa42a": "34782aa65af4a3cf9a2699137f2201cf",
".git/objects/73/1a357cbce05971d05effd64a8e94a6a8de043a": "d47c29d135d24a5fa45db92667603811",
".git/objects/77/27abe478efadcc3902f835486f458c6b89a4f2": "01e8a6ffe339fd65c5e2d9df4e0a70e4",
".git/objects/79/11f63cf4d3ff9d9d523dddaf16b628ec43f35e": "192daf2230fad52f617c0fe6007b2d56",
".git/objects/79/48ea6d6c041a2817df37082822f3358225045f": "db6e4fe5a6f7db32258124cb51d399d2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/4d263f861f1e47ab2669ca2df604e5ca7f243f": "398327c12bd333a60ac545b095ee6113",
".git/objects/80/767d31d50f303273b84cffcf4fa753885e0ce3": "1b3283fa08dfd5407aaf5092e917fda2",
".git/objects/81/e7977995d3ef9688a66173bac569d20d676ab4": "b0eddf93efce8421a7885642249688fa",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/82/d819d8f864ab8f32009e474bc87cc5f91ac9fb": "8f3496b4e5e0a222fcd10a0c6288dd0c",
".git/objects/83/3297fd8e50012130af99b001bf64a0ce8da23f": "679984a383304068f13d2155f9ff7fcb",
".git/objects/83/c1a499da8f21fd239e95b4085b5f43382d9c2b": "c77e05971cf2fd69b904bdb71ad35df5",
".git/objects/85/6439a00a18f855408709e623207c59f152df15": "1cfa54b3b4e8f8ca048ccb5b75969fcd",
".git/objects/86/abc125379e2737afac55299d1c1d3b47409479": "21dee92d91c5566a6858e68c6e1f4540",
".git/objects/87/726899f0fdb517585094f0803dd3f1b27f6c59": "33e3d56e36b9014dd89659729252a11c",
".git/objects/88/60f23141ce102ce772273bfcdc84bf92801ba9": "e7745effed6fcf7765ccf05d0c28396b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/796dcac81c99922e609ef5f4f0ca504e9fb27d": "5e06f0a031b62bf2443ff228f05698b7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/bdb6a96b9ee5ee5b26a2dfcb8e1062ee9b8823": "eaa56e7fa99ab23581484df764f8430a",
".git/objects/8d/6a16e6a7f36ec8757ccb60ced2d59bd34f334b": "424e259cf5451cb77bf0d57d8f11b6f9",
".git/objects/91/80f53dd515f7c02153253a6c197018df76ac42": "812013d513f342ef52a304e74ce9be44",
".git/objects/93/a23d251b87c8952e53dffee0f93f90a8da4f71": "20c6545a4fd49bebb593da7cba90b3cb",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/94/639c835f61079bf8c0288aa08be50d699253a4": "f7385946f17d0d8daf1395e7cf24191d",
".git/objects/98/f19c0a22ebcf124ca4e5924ae20b7c9642b1d6": "8265e31fb8d9bfe1e71613c1b0786581",
".git/objects/9e/86b28eef652e9b4ad812db8190bc4d9c20b909": "1018c771f081766e84cd7e4fd8a0e1d1",
".git/objects/a0/0253a019bf4431834e3f59afd7767d0576f83f": "0b07502f5e865787949f0ea12160a6fc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/3cdb551b8013486878057add75dc603a531d08": "076136871099dc126720fe03ea86ef5f",
".git/objects/a2/5efa3ccbe5c5e2a5210b7facee5244a464baa6": "bc83011291518dc1a4e7cb998fcc2250",
".git/objects/a3/d1be0e90c85fab4e9cc410181b4e1c2f787983": "85f8ac160b17af723f990a4aaaff0d4e",
".git/objects/a4/188b092f8940f4e7eccecb89be8a2c252756e6": "c3a2904eb68747027b72a39c702a369d",
".git/objects/a4/5bd0abff5f5a3d6124714e39aa83f1b2d65036": "682978264413d950a3a42959bc194c1d",
".git/objects/a7/e77b98076d00e77612756c99a7c48cc5cb4a85": "5a90aec1bda6fc79e166389f42670b0d",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ab/44a95744e4b363b41300696f85cb258a2a6993": "1c41ef7f2be73773a5c66a5b26a947ce",
".git/objects/ab/d36cef4a2f5b5aaa8832e1f258ea5d8def84e5": "047c5ed14aff64e192d4cc20c373f589",
".git/objects/ac/3b672b769596288547d34c6c011bfccbd98d44": "a69b456662b085e6c8be194765c8323b",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ae/7fff361a4f45f0ec4d061e73c5332a944ce35e": "ed8d349ad92d3cd18114caddd7e02f12",
".git/objects/ae/ea1ba08703dc125be921f655472d44987e26f2": "cf4e67bfc7b491c8033d85c4b062a34a",
".git/objects/af/ada558b07e017fd72a41a21c0809017af260fe": "a32441d010a6a0587b310a11c18c0136",
".git/objects/b1/7c361089c18c1833bca6dbd18bf7fec4a23571": "00d47816857a10fb6ab13e6534887182",
".git/objects/b1/b2e931b1f0ca54da181bb8434c59fe981c65cf": "b0dfca3511c5087013dd8fb1bef6cfd1",
".git/objects/b3/65ae3fe391582831008c3c9f263ea4ae3931ea": "5ed9bfe2a1d7db96daba28f36b79992d",
".git/objects/b4/84c0a345552581f448d39e995f893fd6dd2974": "bbdf3a678f088f3bb28eca5971c077f6",
".git/objects/b6/9d86636198cacb12cd30132ceed292412f7682": "ee1e67efcd887962ab6f592c0f7f3212",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/b8/3df708c22e9b88d75b328afc29b6923f003dd6": "fc08f71969fdf237cdf783c475ee392f",
".git/objects/b9/c3f41289527d145ea86ce979bed5bf02339f90": "bd4efbe7886b7fa635ef4c408b3f0a92",
".git/objects/ba/223dc9bf1923790a330a3b42e19e0dd7133cb7": "df2f57dc5550b216722218129918df0b",
".git/objects/ba/26802cd6ce6744e6fe4d8e9e8800a187f8f9a8": "f0d96dd7583bbc013ef7ad534509cf1b",
".git/objects/bc/6f4965ebcb659f035b65326d9c1791ca147da0": "0519f2579bfd64eb5953be49d96e99ae",
".git/objects/be/96298df2d2e58d30b6731c2bcfde17be56c4dc": "0eca95638621a1dc03fc9ca697ce339b",
".git/objects/c0/1ce7dc3307bce7c1e5a4cf858581ce58d2188e": "309d38f7b5e0d7f3b63b487f3634f33f",
".git/objects/c0/83d64391903435f4e81ec40643f7965c2db61f": "f5e2d5e158cb621e24ef737d9adbb992",
".git/objects/c2/44e2c0b8e92dab6f2a2a41575b41b26898ae6f": "bf9bad53607472b93ee55a2b93c3b4cd",
".git/objects/c2/f011e80b575a46ff347ab713493db43116c31a": "398378a71aadbf4e724bcf4fdec80bb2",
".git/objects/c3/f47d3cc0d3fec1fea7f2e8979a1a86c25e0f5b": "cfbc6ff566c9fd812b8e92831ea7e144",
".git/objects/c4/e63bbced5ab23ea62ef6d2fc4f5edd8cc4eb5c": "23384865a8273de58976569bbc393762",
".git/objects/c5/d97befe9ed6e9a57a7d48171405dff2ec0fbb9": "d05ece7164e8b2da27d1dc7f1728b37d",
".git/objects/c5/fa13c584d919cc38d44f232da2e48936729a8d": "0f78b82559b999170ee092b03a042bfe",
".git/objects/c9/6153ae110f8b5330ecd0254975fb15f33c8889": "ca577c6e470aa7af585fa1f3c2a8b263",
".git/objects/cc/0e85c1f18a2fa4802d5804e7c45ca5e9ae6c37": "282ed30f767fdb5fbd21c6e99b1b5ef0",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/28ff77a2c361a9d77104b3627719484fd5cd0f": "53a5e8ec78a01b1665d214237d97a4a3",
".git/objects/ce/8acdf69d0d760c570fe2e587913f6e0831ca60": "8115dd59388937b937d0538f23ae1ccb",
".git/objects/d0/82899c7f00ea30890ac8d074be4f36e26d4385": "ec04af48eace99038ae5e8610d273047",
".git/objects/d1/beda74d8ffc7f0ed57dd282905de1a8c201323": "c5a801f38dcd9d2aeb307b5b8ccedc01",
".git/objects/d3/b217eb0d0c5519ee0bc71a964f72f688c7b4e4": "20228a2c05fef4f5e6c62814f4b119a1",
".git/objects/d4/3ffc42248075d267f225172fd0b1f629ab0708": "775c99d5ab5d91adf0629152b7469d14",
".git/objects/d4/9635a322b994058e610edd3a9a297aa83dca11": "610ce23e063fa166d92d242ea91c04fd",
".git/objects/d9/ac8ca652b710b478c87dbf17d0cc308d0955d7": "99ae9a3ab427107df8646bba1ef9a3a3",
".git/objects/da/5a38653e2a806d1406f771437f733e563b8b2d": "f301679294e88b1ab6d778d0c706098c",
".git/objects/db/5e046f6750037c02fc31638bfc0d72dac54057": "8fa8125d32417c09272ace6181e14954",
".git/objects/dc/6bb152c3bb6b5294dd50fd356fa69c1cae9c09": "8c4cefdd8f55a329fd06454e0e67ff49",
".git/objects/dc/9edf9ae496be9985cfea8d4bae1036adecac84": "968a28cc5086d12c59851cf92faca605",
".git/objects/e0/3714c2da31a4c309cb4e718bbc0f00e6a23180": "aacc0c26dc3b5bd5e4eee941082d585b",
".git/objects/e1/39b57787e7d0645f65a1290a8bcf3052608557": "ed8d99d49bd8f6818353061c31f20dd8",
".git/objects/e3/3eb025fc0d452d961a5359514e6e02baf472d3": "abbd882192d0d7b6bc0fab22fff57354",
".git/objects/e4/ddc76e6bd69eb91be243c80ece95bbc44cfeaf": "57a8d79a072b426845d32219eea13fdc",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/a7b79b546c39c05d8da58ae76509ed3cb7c14d": "2ae556d57c1206406efdc60580bdff85",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/ea/875aa1bd59f97a947e849ff5b2fca7aaf2c903": "e852ebfb491a2d6f90f856abbaeabc66",
".git/objects/ea/fa225ed85909afb615dfe02c272a88376075a7": "30735accebfd089e5da27f1fdca78f1e",
".git/objects/eb/a66f291e517ac169cf846e21f734f6067f7b29": "683ec4f827a3e9c1cef786cef455e702",
".git/objects/ec/460ab6e4ced89dbd60be36dde070c87e1e0b58": "48879a8f5368d779112b5296f23335c8",
".git/objects/ee/af10163b1663ca3130c8d6ffec30a3d6562b69": "50da33a47099484ae09f5f913fd4cc76",
".git/objects/f3/1dfe8c9831594f563a2b7be7233ea792c33db6": "9be5d80ff8bd8e425dcf1f43d7951558",
".git/objects/f8/247307a559d7a5d2c3415150f7bec423062f7b": "9f4f8b0adf844ce6d2cfd7fd1fb57e7b",
".git/objects/f8/2dca158aee057a13e95fcce2874ec748d4a674": "49d60e5993c72032b0c1604ebf23362b",
".git/objects/f8/c9e8da4b82fa746da2adb3bd40aef3ae8b564f": "f8e575ac893285767a5cff85890da32e",
".git/objects/fb/5424b54acd07a16a965fc6a322bf9c3fdb0309": "e75f023a76622d242f10b023bf24de13",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/fc/3276c7b913b68cfb39e86ae74274846db4bb77": "7f3a823fdfb7075fdb77659a59dd5e8b",
".git/objects/fd/61de565436d18be25c92f16921617662c00a34": "0926fbcedca3e107c075723e576cd565",
".git/objects/fd/cc11f68b6887b69d3ebf6fdf2aba12a69ec0e9": "949726041e7d96972d6dfb451e00fe16",
".git/objects/fd/df9a08a7f34c4415b9b869aebd414e1858d34f": "e485a282f70a94a0d4acbca9d6153690",
".git/objects/fe/41df12b71e673c34b1452011ecf607beb3df45": "2424826b2500f3f31f40c45eadec2297",
".git/refs/heads/main": "a08d62140ccdf706de436bcf7f3664ff",
".git/refs/remotes/origin/main": "a08d62140ccdf706de436bcf7f3664ff",
"assets/AssetManifest.json": "3b596ebd80ddde0b56367aa5a7a2ed02",
"assets/assets/fonts/BalooTammudu2/BalooTammudu2-Bold.ttf": "b2071516bd57b59035ad848cda457b7c",
"assets/assets/fonts/BalooTammudu2/BalooTammudu2-Medium.ttf": "201a87bdb18d8ab5ab7782fcfa95721d",
"assets/assets/fonts/BalooTammudu2/BalooTammudu2-Regular.ttf": "0edb362707ef5f49b349ee2a4525995c",
"assets/assets/fonts/iconfont/iconfont.ttf": "8c1540328d5cafb02ca9a0d4b0f7991e",
"assets/assets/fonts/SourceHanSansCN/SourceHanSansCN-Normal.otf": "35df35f7cd5b2426e9e25397505f0c9a",
"assets/assets/icons/common/1414def5": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/common/146846ae": "5e1c87ecc447e41b235f3e6b0d15a900",
"assets/assets/icons/common/14bc0cbf": "3770b8dca902787a39c9e1ceded8c96b",
"assets/assets/icons/common/1c7f35f5": "bd7167bfa016735fb8651718e4a8bc35",
"assets/assets/icons/common/256de4bc": "a644ad7893c94ee9deb7eca445973ca8",
"assets/assets/icons/common/258ed0e8": "cbbd70835d9cf93bd710bddc88b4be03",
"assets/assets/icons/common/2731e836": "c659eaa15c2f9930854c452c8ed131e5",
"assets/assets/icons/common/2c50a0da": "88a6297941f44d0eae1869b905313b49",
"assets/assets/icons/common/3525c568": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/common/398b3d55": "d58a9feb124d3b8f35465f34da6eb418",
"assets/assets/icons/common/56656b88": "67bd2eeaffbf87325195a15d2d878092",
"assets/assets/icons/common/57b4b5a": "6f17c333736912ce1d9271f41ae8002c",
"assets/assets/icons/common/5ae72b25": "af14bcb5fe832ddb3974176e5666f98d",
"assets/assets/icons/common/63da5a8c": "cea47fcda921e686ab551bffcc46e7b8",
"assets/assets/icons/common/6631791f": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/common/685c14a0": "e6d586fc16b15d49ad14971b961428cc",
"assets/assets/icons/common/68677d7f": "2582c255f5e5277cb7d8274fccfc81a6",
"assets/assets/icons/common/7d98fe45": "5eaa00a998fe69f4f1b950badc571df1",
"assets/assets/icons/common/7e64ba12": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/common/87374b53": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/common/8e14d925": "85c1f854684c9574106fa0aa4e4171ea",
"assets/assets/icons/common/8f1d94ba": "e4460d0c81123ec2ca4b4ac48c042bfc",
"assets/assets/icons/common/953ac9d2": "6905c16e3fd2480d95279b0c100d47d5",
"assets/assets/icons/common/anquan.svg": "e6d586fc16b15d49ad14971b961428cc",
"assets/assets/icons/common/at.svg": "aee9af74419216b8c3bc621abb7e142f",
"assets/assets/icons/common/bangong.svg": "6905c16e3fd2480d95279b0c100d47d5",
"assets/assets/icons/common/baocun.svg": "31622e348e6fd54a584e0064fdae125c",
"assets/assets/icons/common/baohu.svg": "b533b4b86798767961a19e03fa9ae090",
"assets/assets/icons/common/biaoqian.svg": "6f17c333736912ce1d9271f41ae8002c",
"assets/assets/icons/common/biaoqing.svg": "e11cb21e759b431243ea31d7f94d2c0d",
"assets/assets/icons/common/cb5b6d92": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/common/cc6d32b2": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/common/cf415bba": "39a6fd01d5cfc6fca9eaca46d6fdf570",
"assets/assets/icons/common/d6de0bc2": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/common/d7eca43": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/common/dayin.svg": "564fda94489d265199a512235b3f7c8f",
"assets/assets/icons/common/dingwei.svg": "8d4feef0d774eecb25acded7c43925a8",
"assets/assets/icons/common/e56f201a": "ff889fa757b51d36dd2bb3ac7b3c64d6",
"assets/assets/icons/common/e917f02c": "aee9af74419216b8c3bc621abb7e142f",
"assets/assets/icons/common/ee87145c": "401beb66dc030ca3754157b52ed3e358",
"assets/assets/icons/common/efcb5f80": "a1cee104f762e2b982d4b42d5e33e991",
"assets/assets/icons/common/faxian.svg": "401beb66dc030ca3754157b52ed3e358",
"assets/assets/icons/common/fenlei.svg": "9e81481cd9795b31083df4a4b05dfabf",
"assets/assets/icons/common/fenxiang.svg": "2582c255f5e5277cb7d8274fccfc81a6",
"assets/assets/icons/common/fujian.svg": "88a6297941f44d0eae1869b905313b49",
"assets/assets/icons/common/fukuan.svg": "e4460d0c81123ec2ca4b4ac48c042bfc",
"assets/assets/icons/common/gailv.svg": "ff889fa757b51d36dd2bb3ac7b3c64d6",
"assets/assets/icons/common/gouwuche.svg": "67bd2eeaffbf87325195a15d2d878092",
"assets/assets/icons/common/guanbi.svg": "17a39c5991dfdfc632177fa5842d5868",
"assets/assets/icons/common/guanjun.svg": "85c1f854684c9574106fa0aa4e4171ea",
"assets/assets/icons/common/hongbao.svg": "3770b8dca902787a39c9e1ceded8c96b",
"assets/assets/icons/common/huiyuan.svg": "66d81cd69a08ab646acd10bf58e6cfac",
"assets/assets/icons/common/jiasu.svg": "5e1c87ecc447e41b235f3e6b0d15a900",
"assets/assets/icons/common/jiesuo.svg": "d58a9feb124d3b8f35465f34da6eb418",
"assets/assets/icons/common/jiushui.svg": "bd7167bfa016735fb8651718e4a8bc35",
"assets/assets/icons/common/kabao.svg": "39a6fd01d5cfc6fca9eaca46d6fdf570",
"assets/assets/icons/common/kefu.svg": "5eaa00a998fe69f4f1b950badc571df1",
"assets/assets/icons/common/liwu.svg": "a644ad7893c94ee9deb7eca445973ca8",
"assets/assets/icons/common/lvhang.svg": "cbbd70835d9cf93bd710bddc88b4be03",
"assets/assets/icons/common/man.svg": "af14bcb5fe832ddb3974176e5666f98d",
"assets/assets/icons/common/mark.svg": "cea47fcda921e686ab551bffcc46e7b8",
"assets/assets/icons/common/meishi.svg": "a1cee104f762e2b982d4b42d5e33e991",
"assets/assets/icons/common/mima.svg": "c659eaa15c2f9930854c452c8ed131e5",
"assets/assets/icons/common/pisa.svg": "30055068bbd5b6f785fc37c80eedec33",
"assets/assets/icons/common/qingjie.svg": "149bcc4c9a456903d3f5a986a3fa64c4",
"assets/assets/icons/common/renwu.svg": "c0175c6c1d0e890171549c11b83d71a6",
"assets/assets/icons/common/rili.svg": "04608706328d70a64369bd33cb466627",
"assets/assets/icons/common/riyong.svg": "cddb94de60149861b0a65970bd21cbea",
"assets/assets/icons/common/saomiao.svg": "d97a3bab8f161e04239f3188b15aeeb4",
"assets/assets/icons/common/shanchu.svg": "ff8300f5ef05589d8585be1c3c846df4",
"assets/assets/icons/common/shangchuan.svg": "b0fa2400a20084e7590c5812932beaa1",
"assets/assets/icons/common/shangpin.svg": "b2c5dd71566969dd9188063e05c6c4e7",
"assets/assets/icons/common/shezhi.svg": "06ce07516f5c62f4db14ca0e32e3e6d4",
"assets/assets/icons/common/shijian.svg": "29ef68cbc864e32a428716cedd13dbf8",
"assets/assets/icons/common/shipin.svg": "a74f91f3d1d2bc1b202fc9f37035cbc2",
"assets/assets/icons/common/shiyan.svg": "c547dbc510f4c69d02dbe41af3a15163",
"assets/assets/icons/common/shouji.svg": "3bc4febec8070676f6a25fe011f60bd3",
"assets/assets/icons/common/shouye.svg": "5d112d351cb20b6449aed022bed98cbf",
"assets/assets/icons/common/shuaxin.svg": "e1b9c9427422b694cc3be38ee04c8804",
"assets/assets/icons/common/sousuo.svg": "4668e8173f34af91a8f26a382f7d92ce",
"assets/assets/icons/common/tupian.svg": "43fc200de3d61d45a8169d88eba4382b",
"assets/assets/icons/common/wenjian.svg": "d96118ec2e033053d41cc5f1aca88f0f",
"assets/assets/icons/common/wode.svg": "9781cb8ca30ba450cfe1e046d73150c1",
"assets/assets/icons/common/woman.svg": "ecd232fab9227358b698a956702780fe",
"assets/assets/icons/common/xiangji.svg": "25b89fc883587ba48e71bcedcb7dd531",
"assets/assets/icons/common/xiaoxi.svg": "0efb3d1c0c48ecc02aea5fd966809b3c",
"assets/assets/icons/common/xiazai.svg": "7821aa2c9f352b2131dc8e20d7bfecd3",
"assets/assets/icons/common/xihuan.svg": "ea1cc7662671a57872f0c56cf709f8c1",
"assets/assets/icons/common/xinxi.svg": "bd91d9ede92d89928683b3135d319443",
"assets/assets/icons/common/xinyongka.svg": "b59b2a3a0e5f91f8e1b859919118ef08",
"assets/assets/icons/common/xuanxiang.svg": "8d390b3431aee7a9f425a3e562f97dcb",
"assets/assets/icons/common/xuanzhong.svg": "d093d46600a20221baf4ee91cd91c67f",
"assets/assets/icons/common/xunzhang.svg": "21da103bf43a2db1a88c278a804ff573",
"assets/assets/icons/common/yiliao.svg": "c8de042e3b92d7aff1965cd94b67ae88",
"assets/assets/icons/common/yingshi.svg": "ca226a39ac20b0b9be4b15bf1b3e799d",
"assets/assets/icons/common/yinle.svg": "1cca4c832ed9c23bfb30c76e04695ab4",
"assets/assets/icons/common/yinliao.svg": "edbd15bd948cffa2cdac8319a4f457a2",
"assets/assets/icons/common/yiwen.svg": "6d5312214badfb55d85f7507e8e323f5",
"assets/assets/icons/common/youhuiquan.svg": "5471d6b218ea7106dd43587ae194398f",
"assets/assets/icons/common/yujing.svg": "2c003e92a199207777ec3ead161d172e",
"assets/assets/icons/common/yundong.svg": "9155bc469f3a44e6eb0da4e0b884c364",
"assets/assets/icons/common/zhuangbei.svg": "f43ab8f2dfb079eed635b2911e375b34",
"assets/assets/icons/common/zhuangxiu.svg": "7b5c83c4ad1ba2a40a407f01a28139d2",
"assets/assets/icons/events/notice.png": "6b9c411bc0855922c0fc26c8d2c5b5b7",
"assets/assets/icons/events/participation.png": "112f44f3e594187464acc845e705f26e",
"assets/assets/icons/events/sortition.png": "ed2dbd2450a34d1dabec26327ecae64d",
"assets/assets/icons/events/vote.png": "c21960c7a3d4668021bb2011d7226837",
"assets/assets/icons/logo/logo.png": "14c61e7834c752ba4a4457aeafda852f",
"assets/assets/icons/logo/logo.svg": "ad8f61aadf1410a2798fe28238c0d94d",
"assets/assets/icons/tools/email.png": "4acb884bf1b71d7a4eb06c26d896b200",
"assets/assets/icons/tools/emoji.png": "a3ddef40af575069b70ca078a8c1e29b",
"assets/assets/icons/tools/emoji.svg": "418806a58276720a1287eac347cd291e",
"assets/assets/icons/tools/safety.png": "6bc42cefc3a596004ef49a0bb9eeff6f",
"assets/assets/icons/tools/theme.png": "a5ff725f29508bb9b29daa190a19cf91",
"assets/assets/images/avatar.jpg": "8e90e6fa491bb2f22bf9db09ecf8b254",
"assets/FontManifest.json": "91a5cca4abc3ca7759747a033ef4f2de",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "187bb6e47602319d8e21bc636b0eeb7b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.ico": "46d56d292ef76f940afcb32eb81d06af",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "99750834b28de6f20320bb182b50a7ef",
"/": "99750834b28de6f20320bb182b50a7ef",
"main.dart.js": "2b7849509ee9d64f5b9641de71ba5376",
"manifest.json": "3d388d3b4779d897161d7be27719933b",
"robots.txt": "8d4a8a6c566b9ecc431f4fa59b9f761a",
"splash/img/dark-1x.png": "aee2eaa44b512f79e823d77194da2033",
"splash/img/dark-2x.png": "38fd9c9deb64f7554b375aee6dce13ad",
"splash/img/dark-3x.png": "0664d77d686753e6266255cc969f9194",
"splash/img/light-1x.png": "aee2eaa44b512f79e823d77194da2033",
"splash/img/light-2x.png": "38fd9c9deb64f7554b375aee6dce13ad",
"splash/img/light-3x.png": "0664d77d686753e6266255cc969f9194",
"splash/style.css": "86126e7e4072786170390b7ceee604b3",
"version.json": "09734434f39353da0ae8e8d0384c199d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
