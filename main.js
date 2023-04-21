/*
三度圈和弦大转盘玩具
Made by Anke (安可).
2021.7 (v1)
2022.1 (v2)
    对当前选定的和弦增加闪烁动画
    点击中心部分前两组箭头时，离调和弦直接进行至主调内和弦，变和弦一律进行至调式原始和弦
	修改了转调拖动时的阴影颜色
*/

/*
明确一下术语
    调性：key
    音符（相对音高）：note
    音符（绝对音高）：tone
    主音：tonal
    和弦：chord
    调性主音：keyTonal
*/

//常量
NS="http://www.w3.org/2000/svg";
tableData=[
[[12,"",[]],[12,"",[]],[12,"t",["1","b3","5"]],[8,"T",["1","3","5"]],[8,"",[]],[8,"",[]],[12,"",[]],[12,"",[]],[12,"dt",["b3","5","b7"]],[8,"DT",["3","5","7"]],[8,"",[]],[8,"",[]],[12,"",[]],[16,"b5d",["5","b7","b2"]],[12,"d",["5","b7","2"]],[8,"D",["5","7","2"]],[5,"b5D",["5","7","b2"]],[7,"#5D",["5","7","#2"]],[5,"b5dVII",["b7","2","b4"]],[16,"b3dVII",["b7","b2","4"]],[12,"dVII",["b7","2","4"]],[8,"DVII",["7","2","4"]],[5,"b3DVII",["7","b2","4"]],[5,"#3DVII",["7","#2","4"]],[5,"b3sII",["2","b4","b6"]],[16,"b1sII",["b2","4","b6"]],[12,"sII",["2","4","b6"]],[8,"SII",["2","4","6"]],[7,"b1SII",["b2","4","6"]],[5,"#1SII",["#2","4","6"]],[7,"b1s",["b4","b6","1"]],[12,"",[]],[12,"s",["4","b6","1"]],[8,"S",["4","6","1"]],[8,"",[]],[8,"",[]],[12,"",[]],[12,"",[]],[12,"ts",["b6","1","b3"]],[8,"TS",["6","1","3"]],[8,"",[]],[8,"",[]]],
[[12,"",[]],[12,"",[]],[12,"",[]],[8,"",[]],[8,"",[]],[8,"",[]],[7,"",[]],[7,"",[]],[7,"Dt",["b3","5","7"]],[8,"",[]],[8,"",[]],[8,"",[]],[13,"",[]],[5,"b5D",["5","7","b2"]],[13,"D",["5","7","2"]],[8,"",[]],[5,"",[]],[7,"",[]],[5,"b5DVII",["7","2","b4"]],[5,"b3DVII",["7","b2","4"]],[13,"DVII",["7","2","4"]],[8,"",[]],[5,"",[]],[5,"",[]],[5,"",[]],[16,"",[]],[12,"",[]],[9,"sII",["2","4","b6"]],[16,"b1sII",["b2","4","b6"]],[5,"#1sII",["#2","4","b6"]],[7,"",[]],[12,"",[]],[12,"",[]],[9,"s",["4","b6","1"]],[9,"",[]],[9,"",[]],[12,"",[]],[12,"",[]],[12,"",[]],[7,"Ts",["b6","1","3"]],[7,"",[]],[7,"",[]]],
[[1,"",[]],[1,"",[]],[1,"t7",["1","b3","5","b7"]],[10,"T7",["1","3","5","7"]],[10,"",[]],[10,"",[]],[14,"",[]],[0,"b7dt7",["b3","5","b7","b2"]],[14,"dt7",["b3","5","b7","2"]],[1,"DT7",["3","5","7","2"]],[2,"b7DT7",["3","5","7","b2"]],[16,"#7DT7",["3","5","7","#2"]],[2,"b7d7",["5","b7","2","b4"]],[2,"b5d7",["5","b7","b2","4"]],[1,"d7",["5","b7","2","4"]],[0,"D7",["5","7","2","4"]],[3,"b5D7",["5","7","b2","4"]],[4,"#5D7",["5","7","#2","4"]],[3,"b5dVII7",["b7","2","b4","b6"]],[1,"b3dVII7",["b7","b2","4","b6"]],[0,"dVII7",["b7","2","4","b6"]],[2,"DVIIø7",["7","2","4","6"]],[4,"b3DVIIø7",["7","b2","4","6"]],[3,"#3DVIIø7",["7","#2","4","6"]],[4,"b3sII7",["2","b4","b6","1"]],[16,"b1sII7",["b2","4","b6","1"]],[2,"sII7",["2","4","b6","1"]],[1,"SII7",["2","4","6","1"]],[16,"b1SII7",["b2","4","6","1"]],[0,"#1SII7",["#2","4","6","1"]],[16,"b1s7",["b4","b6","1","b3"]],[1,"",[]],[1,"s7",["4","b6","1","b3"]],[10,"S7",["4","6","1","3"]],[10,"",[]],[10,"",[]],[14,"",[]],[14,"",[]],[14,"ts7",["b6","1","b3","5"]],[1,"TS7",["6","1","3","5"]],[1,"",[]],[1,"",[]]],
[[15,"",[]],[15,"",[]],[15,"#7t7",["1","b3","5","7"]],[10,"",[]],[10,"",[]],[10,"",[]],[15,"",[]],[4,"b7Dt7",["b3","5","7","b2"]],[15,"Dt7",["b3","5","7","2"]],[1,"",[]],[2,"",[]],[16,"",[]],[1,"b7D7",["5","7","2","b4"]],[3,"b5D7",["5","7","b2","4"]],[0,"D7",["5","7","2","4"]],[0,"",[]],[3,"",[]],[4,"",[]],[0,"b5DVIIo7",["7","2","b4","b6"]],[0,"b3DVIIo7",["7","b2","4","b6"]],[6,"DVIIo7",["7","2","4","b6"]],[6,"DVIIo7",["7","2","4","b6"]],[0,"b3DVIIo7",["7","b2","4","b6"]],[2,"#3DVIIo7",["7","#2","4","b6"]],[4,"",[]],[16,"",[]],[2,"",[]],[2,"sII7",["2","4","b6","1"]],[16,"b1sII7",["b2","4","b6","1"]],[1,"#1sII7",["#2","4","b6","1"]],[16,"",[]],[1,"",[]],[1,"",[]],[11,"s7",["4","b6","1","3"]],[11,"",[]],[11,"",[]],[14,"",[]],[14,"",[]],[14,"",[]],[11,"Ts7",["b6","1","3","5"]],[11,"",[]],[11,"",[]]],
[[12,"",[]],[12,"",[]],[12,"",[]],[8,"",[]],[8,"",[]],[8,"",[]],[12,"",[]],[12,"",[]],[12,"",[]],[8,"",[]],[8,"",[]],[8,"",[]],[12,"",[]],[12,"",[]],[12,"",[]],[8,"",[]],[8,"",[]],[8,"",[]],[7,"#5D/dt",["b7","2","#4"]],[5,"b5D/dt",["b7","2","b4"]],[12,"",[]],[17,"d/DT",["7","2","#4"]],[8,"",[]],[17,"",[]],[5,"#3DVII/dt",["2","#4","b6"]],[5,"b3DVII/dt",["2","b4","b6"]],[12,"",[]],[17,"dVII/DT",["2","#4","6"]],[8,"",[]],[5,"b5dVII/DT",["2","#4","b6"]],[5,"#1SII/dt",["#4","b6","1"]],[7,"b1SII/dt",["b4","b6","1"]],[12,"",[]],[18,"sII/DT",["#4","6","1"]],[8,"",[]],[5,"b3sII/DT",["#4","b6","1"]],[12,"",[]],[12,"",[]],[12,"",[]],[8,"",[]],[8,"",[]],[7,"",[]]],
[[7,"",[]],[7,"",[]],[7,"Ts/dt",["b1","b3","5"]],[8,"",[]],[8,"",[]],[8,"",[]],[12,"",[]],[12,"",[]],[12,"",[]],[8,"",[]],[8,"",[]],[8,"",[]],[12,"",[]],[12,"",[]],[12,"",[]],[7,"Dt/DT",["5","7","#2"]],[7,"",[]],[7,"",[]],[7,"",[]],[5,"",[]],[12,"",[]],[17,"D/DT",["7","#2","#4"]],[5,"b5D/DT",["7","#2","4"]],[17,"",[]],[5,"",[]],[5,"",[]],[12,"",[]],[17,"DVII/DT",["#2","#4","6"]],[5,"b3DVII/DT",["#2","4","6"]],[5,"b5DVII/DT",["#2","#4","b6"]],[5,"#1sII/dt",["#4","b6","b1"]],[18,"b1sII/dt",["b4","b6","b1"]],[18,"sII/dt",["4","b6","b1"]],[18,"",[]],[8,"",[]],[5,"",[]],[18,"",[]],[18,"",[]],[18,"s/dt",["b6","b1","b3"]],[8,"",[]],[8,"",[]],[7,"",[]]],
[[1,"",[]],[1,"",[]],[1,"",[]],[10,"",[]],[10,"",[]],[10,"",[]],[14,"",[]],[14,"",[]],[14,"",[]],[1,"",[]],[1,"",[]],[1,"",[]],[17,"#7DT7/dt",["5","b7","2","#4"]],[2,"b7DT7/dt",["5","b7","2","b4"]],[1,"",[]],[17,"dt7/DT",["5","7","2","#4"]],[0,"",[]],[17,"",[]],[4,"#5D7/dt",["b7","2","#4","b6"]],[3,"b5D7/dt",["b7","2","b4","b6"]],[0,"",[]],[1,"d7/DT",["7","2","#4","6"]],[2,"",[]],[2,"b7d7/DT",["7","2","#4","b6"]],[3,"#3DVIIø7/dt",["2","#4","b6","1"]],[4,"b3DVIIø7/dt",["2","b4","b6","1"]],[2,"",[]],[0,"dVII7/DT",["2","#4","6","1"]],[1,"",[]],[3,"b5dVII7/DT",["2","#4","b6","1"]],[0,"#1SII7/dt",["#4","b6","1","b3"]],[18,"b1SII7/dt",["b4","b6","1","b3"]],[1,"",[]],[2,"sII7/DT",["#4","6","1","3"]],[10,"",[]],[4,"b3sII7/DT",["#4","b6","1","3"]],[14,"",[]],[14,"",[]],[14,"",[]],[1,"",[]],[1,"",[]],[11,"",[]]],
[[18,"",[]],[18,"",[]],[18,"Ts7/dt",["b1","b3","5","b7"]],[10,"",[]],[10,"",[]],[10,"",[]],[14,"",[]],[14,"",[]],[14,"",[]],[16,"#7DT7",["3","5","7","#2"]],[16,"",[]],[16,"",[]],[17,"",[]],[2,"",[]],[1,"",[]],[17,"Dt7/DT",["5","7","#2","#4"]],[4,"b7Dt7/DT",["5","7","#2","4"]],[17,"",[]],[4,"",[]],[3,"",[]],[0,"",[]],[0,"D7/DT",["7","#2","#4","6"]],[3,"b5D7/DT",["7","#2","4","6"]],[1,"b7D7/DT",["7","#2","#4","b6"]],[2,"#3DVIIo7/dt",["2","#4","b6","b1"]],[0,"b3DVIIo7/dt",["2","b4","b6","b1"]],[6,"DVIIo7/dt",["2","4","b6","b1"]],[6,"DVIIo7/DT",["#2","#4","6","1"]],[0,"b3DVIIo7/DT",["#2","4","6","1"]],[0,"b5DVIIo7/DT",["#2","#4","b6","1"]],[1,"#1sII7/dt",["#4","b6","b1","b3"]],[18,"b1sII7/dt",["b4","b6","b1","b3"]],[2,"sII7/dt",["4","b6","b1","b3"]],[2,"",[]],[10,"",[]],[4,"",[]],[18,"",[]],[18,"",[]],[18,"s7/dt",["b6","b1","b3","5"]],[1,"",[]],[1,"",[]],[11,"",[]]],
[[7,"b1s/d",["b1","b3","5"]],[12,"",[]],[12,"",[]],[8,"",[]],[8,"",[]],[8,"",[]],[12,"",[]],[12,"",[]],[12,"",[]],[8,"",[]],[8,"",[]],[8,"",[]],[12,"",[]],[12,"",[]],[12,"",[]],[8,"",[]],[8,"",[]],[8,"",[]],[12,"",[]],[12,"",[]],[12,"",[]],[17,"DT/D",["7","2","#4"]],[17,"",[]],[17,"",[]],[17,"",[]],[12,"",[]],[17,"dd",["2","4","6"]],[17,"DD",["2","#4","6"]],[5,"b5DD",["2","#4","b6"]],[7,"#5DD",["2","#4","#6"]],[5,"b5ddVII",["4","6","b1"]],[12,"",[]],[17,"ddVII",["4","6","1"]],[17,"DDVII",["#4","6","1"]],[5,"b3DDVII",["#4","b6","1"]],[5,"#3DDVII",["#4","#6","1"]],[5,"b3sII/d",["6","b1","b3"]],[12,"",[]],[18,"sII/d",["6","1","b3"]],[8,"",[]],[7,"",[]],[5,"#1SII/D",["#6","1","3"]]],
[[7,"",[]],[12,"",[]],[12,"",[]],[18,"s/D",["1","b3","5"]],[18,"",[]],[18,"",[]],[12,"",[]],[12,"",[]],[12,"",[]],[7,"Ts/D",["b3","5","7"]],[7,"",[]],[7,"",[]],[12,"",[]],[12,"",[]],[12,"",[]],[8,"",[]],[8,"",[]],[8,"",[]],[7,"",[]],[7,"",[]],[7,"Dt/d",["b7","2","#4"]],[17,"",[]],[17,"",[]],[17,"",[]],[17,"",[]],[5,"b5DD",["2","#4","b6"]],[17,"DD",["2","#4","6"]],[17,"",[]],[5,"",[]],[7,"",[]],[5,"b5DDVII",["#4","6","b1"]],[5,"b3DDVII",["#4","b6","1"]],[17,"DDVII",["#4","6","1"]],[17,"",[]],[5,"",[]],[5,"",[]],[5,"",[]],[12,"",[]],[18,"",[]],[18,"sII/D",["6","1","b3"]],[18,"b1sII/D",["b6","1","b3"]],[5,"#1sII/D",["#6","1","b3"]]],
[[18,"b1s7/d",["b1","b3","5","b7"]],[1,"",[]],[1,"",[]],[10,"",[]],[10,"",[]],[10,"",[]],[14,"",[]],[14,"",[]],[14,"",[]],[1,"",[]],[1,"",[]],[1,"",[]],[1,"",[]],[1,"",[]],[1,"",[]],[16,"#7D7",["5","7","2","#4"]],[16,"",[]],[16,"",[]],[17,"",[]],[0,"",[]],[17,"dt7/d",["b7","2","4","6"]],[1,"DT7/D",["7","2","#4","6"]],[2,"b7DT7/D",["7","2","#4","b6"]],[17,"#7DT7/D",["7","2","#4","#6"]],[2,"b7dd7",["2","4","6","b1"]],[2,"",[]],[1,"dd7",["2","4","6","1"]],[0,"DD7",["2","#4","6","1"]],[3,"b5DD7",["2","#4","b6","1"]],[4,"#5DD7",["2","#4","#6","1"]],[3,"b5ddVII7",["4","6","b1","b3"]],[1,"",[]],[0,"ddVII7",["4","6","1","b3"]],[2,"DDVIIø7",["#4","6","1","3"]],[4,"b3DDVIIø7",["#4","b6","1","3"]],[3,"#3DDVIIø7",["#4","#6","1","3"]],[4,"b3sII7/d",["6","b1","b3","5"]],[14,"",[]],[2,"sII7/d",["6","1","b3","5"]],[1,"",[]],[11,"",[]],[0,"#1SII7/D",["#6","1","3","5"]]],
[[18,"",[]],[1,"",[]],[1,"",[]],[18,"s7/D",["1","b3","5","7"]],[18,"",[]],[18,"",[]],[14,"",[]],[14,"",[]],[14,"",[]],[18,"Ts7/D",["b3","5","7","2"]],[18,"",[]],[18,"",[]],[16,"",[]],[16,"",[]],[16,"#7d7",["5","b7","2","#4"]],[16,"",[]],[16,"",[]],[16,"",[]],[17,"",[]],[4,"b7Dt7/dd",["b7","2","#4","b6"]],[17,"Dt7/d",["b7","2","#4","6"]],[1,"",[]],[2,"",[]],[17,"",[]],[1,"b7DD7",["2","#4","6","b1"]],[3,"b5DD7",["2","#4","b6","1"]],[0,"DD7",["2","#4","6","1"]],[0,"",[]],[3,"",[]],[4,"",[]],[0,"b5DDVIIo7",["#4","6","b1","b3"]],[0,"b3DDVIIo7",["#4","b6","1","b3"]],[6,"DDVIIo7",["#4","6","1","b3"]],[6,"DDVIIo7",["#4","6","1","b3"]],[0,"b3DDVIIo7",["#4","b6","1","b3"]],[2,"#3DDVIIo7",["#4","#6","1","b3"]],[4,"",[]],[14,"",[]],[2,"",[]],[2,"sII7/D",["6","1","b3","5"]],[18,"b1sII7/D",["b6","1","b3","5"]],[1,"#1sII7/D",["#6","1","b3","5"]]],
[[5,"#1SII/dVII",["#1","b3","5"]],[7,"b1SII/dVII",["b1","b3","5"]],[12,"",[]],[8,"",[]],[17,"b3dVII/SII",["1","b3","5"]],[5,"b5dVII/SII",["1","3","b5"]],[12,"",[]],[12,"",[]],[12,"",[]],[18,"sII/SII",["3","5","b7"]],[18,"b1sII/SII",["b3","5","b7"]],[5,"b3sII/SII",["3","b5","b7"]],[12,"",[]],[12,"",[]],[12,"",[]],[18,"s/SII",["5","b7","2"]],[18,"",[]],[7,"b1s/SII",["b5","b7","2"]],[12,"",[]],[12,"",[]],[12,"",[]],[18,"ts/SII",["b7","2","4"]],[18,"",[]],[18,"",[]],[17,"",[]],[17,"",[]],[17,"DT/dVII",["2","4","6"]],[8,"",[]],[8,"",[]],[8,"",[]],[7,"#5D/dVII",["4","6","#1"]],[5,"b5D/dVII",["4","6","b1"]],[17,"D/dVII",["4","6","1"]],[8,"",[]],[8,"",[]],[8,"",[]],[5,"#3DVII/dVII",["6","#1","b3"]],[5,"b3DVII/dVII",["6","b1","b3"]],[17,"DVII/dVII",["6","1","b3"]],[8,"",[]],[17,"b5d/SII",["6","1","b3"]],[8,"",[]]],
[[5,"#1sII/dVII",["#1","b3","b5"]],[18,"b1sII/dVII",["b1","b3","b5"]],[18,"sII/dVII",["1","b3","b5"]],[17,"DVII/SII",["#1","3","5"]],[5,"b3DVII/SII",["#1","b3","5"]],[5,"b5DVII/SII",["#1","3","b5"]],[18,"",[]],[18,"",[]],[18,"s/dVII",["b3","b5","b7"]],[18,"",[]],[18,"",[]],[5,"",[]],[7,"",[]],[7,"",[]],[7,"Ts/dVII",["b5","b7","2"]],[18,"",[]],[18,"",[]],[7,"",[]],[12,"",[]],[12,"",[]],[12,"",[]],[18,"",[]],[18,"",[]],[18,"",[]],[17,"",[]],[17,"",[]],[17,"",[]],[8,"",[]],[8,"",[]],[8,"",[]],[7,"",[]],[5,"",[]],[17,"",[]],[7,"Dt/SII",["4","6","#1"]],[7,"",[]],[7,"",[]],[5,"",[]],[5,"",[]],[17,"",[]],[17,"D/SII",["6","#1","3"]],[5,"b5D/SII",["6","#1","b3"]],[17,"",[]]],
[[0,"#1SII7/dVII",["#1","b3","5","b7"]],[18,"b1SII7/dVII",["b1","b3","5","b7"]],[1,"",[]],[0,"dVII7/SII",["1","3","5","b7"]],[1,"b3dVII7/SII",["1","b3","5","b7"]],[3,"b5dVII7/SII",["1","3","b5","b7"]],[14,"",[]],[14,"",[]],[14,"",[]],[2,"sII7/SII",["3","5","b7","2"]],[18,"b1sII7/SII",["b3","5","b7","2"]],[4,"b3sII7/SII",["3","b5","b7","2"]],[1,"",[]],[1,"",[]],[1,"",[]],[1,"s7/SII",["5","b7","2","4"]],[1,"",[]],[18,"b1s7/SII",["b5","b7","2","4"]],[16,"",[]],[16,"",[]],[16,"#7dVII",["b7","2","4","6"]],[18,"ts7/SII",["b7","2","4","6"]],[18,"",[]],[18,"",[]],[17,"#7DT7/dVII",["2","4","6","#1"]],[2,"b7DT7/dVII",["2","4","6","b1"]],[1,"DT7/dVII",["2","4","6","1"]],[1,"",[]],[1,"",[]],[1,"",[]],[4,"#5D7/dVII",["4","6","#1","b3"]],[3,"b5D7/dVII",["4","6","b1","b3"]],[0,"D7/dVII",["4","6","1","b3"]],[10,"",[]],[0,"b7dt7/SII",["4","6","1","b3"]],[10,"",[]],[3,"#3DVIIø7/dVII",["6","#1","b3","5"]],[4,"b3DVIIø7/dVII",["6","b1","b3","5"]],[2,"DVIIø7/dVII",["6","1","b3","5"]],[1,"",[]],[2,"b5d7/SII",["6","1","b3","5"]],[2,"b7d7/SII",["6","1","3","b5"]]],
[[1,"#1sII7/dVII",["#1","b3","b5","b7"]],[18,"b1sII7/dVII",["b1","b3","b5","b7"]],[2,"sII7/dVII",["1","b3","b5","b7"]],[6,"DVIIo7/SII",["#1","3","5","b7"]],[0,"b3DVIIo7/SII",["#1","b3","5","b7"]],[0,"b5DVIIo7/SII",["#1","3","b5","b7"]],[18,"",[]],[18,"",[]],[18,"s7/dVII",["b3","b5","b7","2"]],[2,"",[]],[18,"",[]],[4,"",[]],[18,"",[]],[18,"",[]],[18,"Ts7/dVII",["b5","b7","2","4"]],[1,"",[]],[1,"",[]],[18,"",[]],[16,"",[]],[16,"",[]],[16,"",[]],[18,"",[]],[18,"",[]],[18,"",[]],[17,"",[]],[2,"",[]],[1,"",[]],[16,"#7SII7",["2","4","6","#1"]],[16,"",[]],[16,"",[]],[4,"",[]],[3,"",[]],[0,"",[]],[17,"Dt7/SII",["4","6","#1","3"]],[4,"b7Dt7/SII",["4","6","#1","b3"]],[17,"",[]],[2,"#3DVIIo7/dVII",["6","#1","b3","b5"]],[0,"b3DVIIo7/dVII",["6","b1","b3","b5"]],[6,"DVIIo7/dVII",["6","1","b3","b5"]],[0,"D7/SII",["6","#1","3","5"]],[3,"b5D7/SII",["6","#1","b3","5"]],[1,"b7D7/SII",["6","#1","3","b5"]]],
[[12,"",[]],[17,"b5d/s",["1","b3","b5"]],[12,"",[]],[8,"",[]],[5,"b5D/S",["1","3","b5"]],[7,"#5D/S",["1","3","#5"]],[5,"b5dVII/s",["b3","5","bb7"]],[17,"b3dVII/s",["b3","b5","b7"]],[12,"",[]],[17,"DVII/S",["3","5","b7"]],[5,"b3DVII/S",["3","b5","b7"]],[5,"#3DVII/S",["3","#5","b7"]],[5,"b3sII/s",["5","bb7","b2"]],[18,"b1sII/s",["b5","b7","b2"]],[18,"sII/s",["5","b7","b2"]],[18,"SII/S",["5","b7","2"]],[7,"b1SII/S",["b5","b7","2"]],[5,"#1SII/S",["#5","b7","2"]],[7,"b1s/s",["bb7","b2","4"]],[18,"",[]],[18,"s/s",["b7","b2","4"]],[18,"S/S",["b7","2","4"]],[18,"",[]],[18,"",[]],[18,"",[]],[18,"",[]],[18,"ts/s",["b2","4","b6"]],[8,"",[]],[8,"",[]],[8,"",[]],[12,"",[]],[12,"",[]],[12,"",[]],[8,"",[]],[8,"",[]],[8,"",[]],[12,"",[]],[12,"",[]],[12,"",[]],[8,"",[]],[8,"",[]],[8,"",[]]],
[[17,"",[]],[5,"b5D/s",["1","3","b5"]],[17,"D/s",["1","3","5"]],[8,"",[]],[5,"",[]],[7,"",[]],[5,"b5DVII/s",["3","5","bb7"]],[5,"b3DVII/s",["3","b5","b7"]],[17,"DVII/s",["3","5","b7"]],[17,"",[]],[5,"",[]],[5,"",[]],[5,"",[]],[18,"",[]],[18,"",[]],[18,"sII/S",["5","b7","b2"]],[18,"b1sII/S",["b5","b7","b2"]],[5,"#1sII/S",["#5","b7","b2"]],[7,"",[]],[18,"",[]],[18,"",[]],[18,"s/S",["b7","b2","4"]],[18,"",[]],[18,"",[]],[18,"",[]],[18,"",[]],[18,"",[]],[7,"Ts/S",["b2","4","6"]],[7,"",[]],[7,"",[]],[12,"",[]],[12,"",[]],[12,"",[]],[8,"",[]],[8,"",[]],[8,"",[]],[7,"",[]],[7,"",[]],[7,"Dt/s",["b6","1","3"]],[8,"",[]],[8,"",[]],[8,"",[]]],
[[2,"b7d7/s",["1","b3","5","bb7"]],[2,"b5d7/s",["1","b3","b5","b7"]],[1,"",[]],[0,"D7/S",["1","3","5","b7"]],[3,"b5D7/S",["1","3","b5","b7"]],[4,"#5D7/S",["1","3","#5","b7"]],[3,"b5dVII7/s",["b3","5","bb7","b2"]],[1,"b3dVII7/s",["b3","b5","b7","b2"]],[0,"dVII7/s",["b3","5","b7","b2"]],[2,"DVIIø7/S",["3","5","b7","2"]],[4,"b3DVIIø7/S",["3","b5","b7","2"]],[3,"#3DVIIø7/S",["3","#5","b7","2"]],[4,"b3sII7/s",["5","bb7","b2","4"]],[18,"b1sII7/s",["b5","b7","b2","4"]],[2,"sII7/s",["5","b7","b2","4"]],[1,"SII7/S",["5","b7","2","4"]],[18,"b1SII7/S",["b5","b7","2","4"]],[0,"#1SII7/S",["#5","b7","2","4"]],[18,"b1s7/s",["bb7","b2","4","b6"]],[1,"",[]],[1,"s7/s",["b7","b2","4","b6"]],[18,"S7/S",["b7","2","4","6"]],[18,"",[]],[18,"",[]],[18,"",[]],[18,"",[]],[18,"ts7/s",["b2","4","b6","1"]],[1,"",[]],[1,"",[]],[1,"",[]],[1,"",[]],[1,"",[]],[1,"",[]],[10,"",[]],[10,"",[]],[10,"",[]],[14,"",[]],[0,"b7dt7/s",["b6","1","b3","b5"]],[14,"",[]],[1,"",[]],[2,"b7DT7/S",["6","1","3","b5"]],[17,"#7DT7/S",["6","1","3","#5"]]],
[[1,"b7D7/s",["1","3","5","bb7"]],[3,"b5D7/s",["1","3","b5","b7"]],[0,"D7/s",["1","3","5","b7"]],[0,"",[]],[3,"",[]],[4,"",[]],[0,"b5DVIIo7/s",["3","5","bb7","b2"]],[0,"b3DVIIo7/s",["3","b5","b7","b2"]],[6,"DVIIo7/s",["3","5","b7","b2"]],[6,"DVIIo7/S",["3","5","b7","b2"]],[0,"b3DVIIo7/S",["3","b5","b7","b2"]],[2,"#3DVIIo7/S",["3","#5","b7","b2"]],[4,"",[]],[18,"",[]],[2,"",[]],[2,"sII7/S",["5","b7","b2","4"]],[18,"b1sII7/S",["b5","b7","b2","4"]],[1,"#1sII7/S",["#5","b7","b2","4"]],[18,"",[]],[1,"",[]],[1,"",[]],[18,"s7/S",["b7","b2","4","6"]],[18,"",[]],[18,"",[]],[18,"",[]],[18,"",[]],[18,"",[]],[18,"Ts7/S",["b2","4","6","1"]],[18,"",[]],[18,"",[]],[16,"",[]],[16,"",[]],[16,"#7s7",["4","b6","1","3"]],[10,"",[]],[10,"",[]],[10,"",[]],[17,"",[]],[4,"b7Dt7/s",["b6","1","3","b5"]],[17,"Dt7/s",["b6","1","3","5"]],[1,"",[]],[2,"",[]],[17,"",[]]],
[[12,"",[]],[12,"",[]],[12,"",[]],[8,"",[]],[8,"",[]],[8,"",[]],[7,"",[]],[5,"b5D/ts",["b3","5","bb7"]],[12,"",[]],[8,"",[]],[17,"b5d/TS",["3","5","b7"]],[8,"",[]],[5,"#3DVII/ts",["5","7","b2"]],[5,"b3DVII/ts",["5","bb7","b2"]],[17,"DVII/ts",["5","b7","b2"]],[8,"",[]],[17,"b3dVII/TS",["5","b7","2"]],[5,"b5dVII/TS",["5","7","b2"]],[5,"#1SII/ts",["7","b2","4"]],[7,"b1SII/ts",["bb7","b2","4"]],[18,"SII/ts",["b7","b2","4"]],[8,"",[]],[18,"b1sII/TS",["b7","2","4"]],[5,"b3sII/TS",["7","b2","4"]],[18,"",[]],[18,"",[]],[18,"S/ts",["b2","4","b6"]],[8,"",[]],[8,"",[]],[7,"b1s/TS",["b2","4","6"]],[12,"",[]],[12,"",[]],[12,"",[]],[8,"",[]],[8,"",[]],[8,"",[]],[12,"",[]],[12,"",[]],[12,"",[]],[8,"",[]],[8,"",[]],[8,"",[]]],
[[12,"",[]],[12,"",[]],[12,"",[]],[7,"Dt/TS",["1","3","#5"]],[7,"",[]],[7,"",[]],[7,"",[]],[5,"",[]],[12,"",[]],[17,"D/TS",["3","#5","7"]],[5,"b5D/TS",["3","#5","b7"]],[17,"",[]],[5,"",[]],[5,"",[]],[17,"",[]],[17,"DVII/TS",["#5","7","2"]],[5,"b3DVII/TS",["#5","b7","2"]],[5,"b5DVII/TS",["#5","7","b2"]],[5,"#1sII/ts",["7","b2","b4"]],[18,"b1sII/ts",["bb7","b2","b4"]],[18,"sII/ts",["b7","b2","b4"]],[8,"",[]],[18,"",[]],[5,"",[]],[18,"",[]],[18,"",[]],[18,"s/ts",["b2","b4","b6"]],[8,"",[]],[8,"",[]],[7,"",[]],[7,"",[]],[7,"",[]],[7,"Ts/ts",["b4","b6","1"]],[8,"",[]],[8,"",[]],[8,"",[]],[12,"",[]],[12,"",[]],[12,"",[]],[8,"",[]],[8,"",[]],[8,"",[]]],
[[15,"",[]],[2,"b7DT7/ts",["1","b3","5","bb7"]],[1,"",[]],[10,"",[]],[0,"b7dt7/TS",["1","3","5","b7"]],[10,"",[]],[4,"#5D7/ts",["b3","5","7","b2"]],[3,"b5D7/ts",["b3","5","bb7","b2"]],[0,"D7/ts",["b3","5","b7","b2"]],[1,"",[]],[2,"b5d7/TS",["3","5","b7","2"]],[2,"b7d7/TS",["3","5","7","b2"]],[3,"#3DVIIø7/ts",["5","7","b2","4"]],[4,"b3DVIIø7/ts",["5","bb7","b2","4"]],[2,"DVIIø7/ts",["5","b7","b2","4"]],[0,"",[]],[1,"b3dVII7/TS",["5","b7","2","4"]],[3,"b5dVII7/TS",["5","7","b2","4"]],[0,"#1SII7/ts",["7","b2","4","b6"]],[18,"b1SII7/ts",["bb7","b2","4","b6"]],[1,"SII7/ts",["b7","b2","4","b6"]],[2,"",[]],[18,"b1sII7/TS",["b7","2","4","6"]],[4,"b3sII7/TS",["7","b2","4","6"]],[18,"",[]],[18,"",[]],[18,"S7/ts",["b2","4","b6","1"]],[1,"",[]],[1,"",[]],[18,"b1s7/TS",["b2","4","6","1"]],[1,"",[]],[1,"",[]],[1,"",[]],[10,"",[]],[10,"",[]],[10,"",[]],[14,"",[]],[14,"",[]],[14,"",[]],[1,"",[]],[1,"",[]],[1,"",[]]],
[[15,"",[]],[2,"",[]],[1,"",[]],[18,"Dt7/TS",["1","3","#5","7"]],[4,"b7Dt7/TS",["1","3","#5","b7"]],[18,"",[]],[4,"",[]],[3,"",[]],[0,"",[]],[0,"D7/TS",["3","#5","7","2"]],[3,"b5D7/TS",["3","#5","b7","2"]],[1,"b7D7/TS",["3","#5","7","b2"]],[2,"#3DVIIo7/ts",["5","7","b2","b4"]],[0,"b3DVIIo7/ts",["5","bb7","b2","b4"]],[6,"DVIIo7/ts",["5","b7","b2","b4"]],[6,"DVIIo7/TS",["#5","7","2","4"]],[0,"b3DVIIo7/TS",["#5","b7","2","4"]],[0,"b5DVIIo7/TS",["#5","7","b2","4"]],[1,"#1sII7/ts",["7","b2","b4","b6"]],[18,"b1sII7/ts",["bb7","b2","b4","b6"]],[2,"sII7/ts",["b7","b2","b4","b6"]],[2,"",[]],[18,"",[]],[4,"",[]],[18,"",[]],[18,"",[]],[18,"s7/ts",["b2","b4","b6","1"]],[1,"",[]],[1,"",[]],[18,"",[]],[18,"",[]],[18,"",[]],[18,"Ts7/ts",["b4","b6","1","b3"]],[10,"",[]],[10,"",[]],[10,"",[]],[14,"",[]],[14,"",[]],[14,"",[]],[16,"#7TS7",["6","1","3","#5"]],[16,"",[]],[16,"",[]]]
];
colors=//范围：0~18
["#00FF00","#FFFF00","#0080FF","#00C0C0","#C0C000","#8080FF","#00FFFF","#FF0000","#FFC0FF","#FFC0C0","#FF80FF","#FF8080","#C0FFFF","#C0FFC0","#80FFFF","#80FF80","#C0C0C0","#FFC000","#C0FF00"];

//实用函数
function Rad(deg){
    return deg/180*Math.PI;
}
function Deg(rad){
    return rad/Math.PI*180;
}
keysigs=["F","C","G","D","A","E","B"];
function getKeysig(sharpness){
    let keysig="";
    while(sharpness>5){
        keysig="#"+keysig;
        if(keysig.slice(0,2)=="##") keysig="x"+keysig.slice(2);
        sharpness-=7;
    }
    while(sharpness<-1){
        keysig="b"+keysig;
        sharpness+=7;
    }
    keysig+=keysigs[sharpness+1];
    return keysig;
}
function getSharpness(keysig){
    let sharpness=-1;
    for(let i=0;i<keysig.length-1;i++){
        switch(keysig.charAt(i)){
            case "#":
            sharpness+=7;break;
            case "x":
            sharpness+=14;break;
            case "b":
            sharpness-=7;
        }
    }
    sharpness+=keysigs.indexOf(keysig.charAt(keysig.length-1));
    return sharpness;
}

//元素变量
let DRight=document.getElementById("dright");
let SIniKeyTonal=document.getElementById("sinikeytonal");
let DChordBox=document.getElementById("dchordbox");
let DChordDescription=document.getElementById("dchorddescription");
let BGetMajMin=document.getElementById("bgetmajmin");
let TDengyin=document.getElementById("tdengyin");
let DBeforeTransBox=document.getElementById("dbeforetransbox");
let DAfterTransBox=document.getElementById("daftertransbox");
let TCurKeyTonal=document.getElementById("tcurkeytonal");
let BReset=document.getElementById("breset");
let IViewSize=document.getElementById("iviewsize");
let TSize=document.getElementById("tsize");

//添加声音
let tones=[]; //范围：1~36
for(let i=1;i<=36;i++){
    let tone=new Audio(i+".mp3");
    tones[i]=tone;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//绘制
let iniWidth=1200;

let svg=document.getElementById("svg");

//变量名：th表示横坐标换算成的角度，r表示纵坐标换算成的半径；pp（++）表示增一后的坐标；hpp（half ++）表示增半后的坐标。
//这些临时变量都是用来绘制扇形（扇环）的。

//绘制底盘
let c1=document.createElementNS(NS,"g");
group=["i","I","iii","III","v","V","vii","VII","ii","II","iv","IV","vi","VI"];
let r=33;
let rhpp=r-0.5;
for(let i=0;i<14;i++){
	let th=(i-1)*360/14;
	let thpp=i*360/14;
	let thLabel=(i%2==0 ? (i-1/6)*360/14 : (i-5/6)*360/14);
    let path=document.createElementNS(NS,"path");
    let d="M0 0 "+r*Math.sin(Rad(th))+" "+r*-Math.cos(Rad(th))+"A"+r+" "+r+" 0 0 1 "+r*Math.sin(Rad(thpp))+" "+r*-Math.cos(Rad(thpp));
    path.setAttribute("d",d);
    path.setAttribute("fill",(i%2==0 ? "#004080" : "#804000"));
    c1.appendChild(path);
    let label=document.createElementNS(NS,"text");
    label.textContent=group[i];
    label.setAttribute("fill","#FFFF00");
    label.setAttribute("style","font-size:0.9");
    label.setAttribute("x",rhpp*Math.sin(Rad(thLabel)));
    label.setAttribute("y",rhpp*-Math.cos(Rad(thLabel)));
    label.setAttribute("transform","rotate("+thLabel+","+rhpp*Math.sin(Rad(thLabel))+","+rhpp*-Math.cos(Rad(thLabel))+")");
    c1.appendChild(label);
}
svg.appendChild(c1);

//绘制转盘，并添加单元格的鼠标（高亮）事件
let c2=document.createElementNS(NS,"g");
scaleNotes=[,0,2,4,5,7,9,11]; //自然音下音阶各音相对其主音的相对音高，用于记录和弦组成音相对音高。
HlFill={none:"none",highlighted:"rgba(255,255,255,0.25)",selected:"rgba(0,0,0,0.25)",shadowed:"rgba(64,64,64,0.75)",transposable:"rgba(255,255,0,0.5)"}; //用于呈现高亮效果
cells=[];
for(let hang=0;hang<24;hang++){
	cells[hang]=[];
	let r=32-hang;
	let rpp=r-1;
	let lineH=0.45-0.01*hang; //用于绘制标签，代表标签一行字的高度
	let rLabel1=r-0.5+lineH/2;
	let rLabel2=r-0.5-lineH/2;
    for(let lie=0;lie<42;lie++){
        let notes=[]; //用来记录各和弦组成音相对当前调性主音的相对音高。
        for(let i=0;i<tableData[hang][lie][2].length;i++){
            notes[i]=scaleNotes[tableData[hang][lie][2][i].charAt(tableData[hang][lie][2][i].length-1)];
            switch(tableData[hang][lie][2][i].charAt(0)){
                case "b":
                if(tableData[hang][lie][2][i].charAt(1)=="b"){
                    notes[i]-=2;
                }else{
                    notes[i]-=1;
                }
                break;
                case "#":
                notes[i]+=1;break;
                case "x":
                notes[i]+=2;
            }
            //修正一下八度，使组成音相对音高由低到高
            if(i!=0 && notes[i]<notes[i-1]) notes[i]+=12;
        }
		//调整一下八度，将根音的相对音高大于等于7（即自然五级音）的和弦降低一个八度，以限定和弦的音高范围。
		if(notes[0]>=7){
			for(let i=0;i<notes.length;i++) notes[i]-=12;
		}
        //判断和弦的增六度（减三度）出现在第几个音符。-1表示没有，0~2表示出现在第0~2个音符。
        let aug6Point=-1; 
        for(let i=0;i<notes.length-1;i++){
            if(notes[i+1]-notes[i]==2){
                aug6Point=i;
                break;
            }
        }        
        
		let th=(lie-3)*360/42;
		let thpp=(lie-2)*360/42;
		let thhpp=(lie-2.5)*360/42;
		let graph=document.createElementNS(NS,"g"); //该单元格的所有可见元素，包括单元格图形、标签、高亮。鼠标事件也加在graph上。
		let path=document.createElementNS(NS,"path");
		let d="M"+r*Math.sin(Rad(th))+" "+r*-Math.cos(Rad(th))+" A"+r+" "+r+" 0 0 1 "+r*Math.sin(Rad(thpp))+" "+r*-Math.cos(Rad(thpp))+"L"+rpp*Math.sin(Rad(thpp))+" "+rpp*-Math.cos(Rad(thpp))+" A"+r+" "+r+" 0 0 0 "+rpp*Math.sin(Rad(th))+" "+rpp*-Math.cos(Rad(th));
		path.setAttribute("d",d);
		path.setAttribute("fill",colors[tableData[hang][lie][0]]);
		graph.appendChild(path);
		let label1=document.createElementNS(NS,"text");
		label1.setAttribute("style","font-size:"+lineH);
		label1.textContent=tableData[hang][lie][1];
		label1.setAttribute("transform","translate("+rLabel1*Math.sin(Rad(thhpp))+","+rLabel1*-Math.cos(Rad(thhpp))+") rotate("+thhpp+")");
		graph.appendChild(label1);
        let label2=document.createElementNS(NS,"text");
        label2.setAttribute("style","font-size:"+lineH);
        if(aug6Point==-1){
            label2.textContent=tableData[hang][lie][2].join("");
        }else{
            label2.append(tableData[hang][lie][2].slice(0,aug6Point).join(""));
            let tspan=document.createElementNS(NS,"tspan");
            tspan.setAttribute("fill","#FF0000");
            tspan.textContent=tableData[hang][lie][2].slice(aug6Point,aug6Point+2).join("");
            label2.appendChild(tspan);
            label2.append(tableData[hang][lie][2].slice(aug6Point+2).join(""));
        }
        label2.setAttribute("transform","translate("+rLabel2*Math.sin(Rad(thhpp))+","+rLabel2*-Math.cos(Rad(thhpp))+") rotate("+thhpp+")");
        graph.appendChild(label2);
        //用于呈现高亮效果
        let hl=document.createElementNS(NS,"path");
        hl.setAttribute("d",d);
        hl.setAttribute("fill",HlFill.none);
        hl.setAttribute("pointer-events","none");
        graph.appendChild(hl);
        
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //关于单元格选择的鼠标事件已整合到后面“交互”部分中（因为要先高亮才能鼠标选择）。而单元格的鼠标事件只保留高亮和取消高亮就够了。
        
		graph.addEventListener("mouseover",function(){
            highlight(hang,lie);
        })
        
		graph.addEventListener("mouseout",function(){
			unhighlight();
		})

		c2.appendChild(graph);
        
        let cell={
            graph:graph,
			hl:hl,
            notes:notes,
            aug6Point:aug6Point,
            //因为bringNotes后就和tableData内的值不一样了，而bringNotes时应当循环参照tableData内的值，所以应当另记为单元格对象属性才好。
            name:tableData[hang][lie][1],
            notesSig:tableData[hang][lie][2] //组成音标记
		};
        cells[hang][lie]=cell;
	}
}
//bringNotes，不能直接bring进原tableData里，因为bringNotes时还要循环参照tableData内的值。
function bringNotes(hang,lie){
	let minMaj=(Math.floor(lie/3)%2==0 ? "min" : "maj");
	let tempHang=hang;
	let tempLie=lie;
	if(hang%2==1 && tableData[hang][lie][0]==tableData[hang-1][lie][0] && tableData[hang-1][lie][1]){
		tempHang--;
	}else{
		do{
			if(minMaj=="min"){
				if(tempLie%3!=2){
					tempLie++;
				}else{
					tempLie=lie;
					tempHang--;
				}
			}else{
				if(tempLie%3!=0){
					tempLie--;
				}else{
					tempLie=lie;
					tempHang--;
				}
			}
		}while(tableData[tempHang][tempLie][0]!=tableData[hang][lie][0])
	}
	if(!cells[tempHang][tempLie].name) bringNotes(tempHang,tempLie);
	
	cells[hang][lie].notes=cells[tempHang][tempLie].notes;
	cells[hang][lie].aug6Point=cells[tempHang][tempLie].aug6Point;
    cells[hang][lie].name=cells[tempHang][tempLie].name;
    cells[hang][lie].notesSig=cells[tempHang][tempLie].notesSig;
}
for(let hang=0;hang<24;hang++){
	for(let lie=0;lie<42;lie++){
		if(!cells[hang][lie].name) bringNotes(hang,lie);
	}
}
//添加经纬线
let lineWd=0.1;
for(let jing=0;jing<7;jing++){
	let th=(jing-0.5)*360/7;
	let jingxian=document.createElementNS(NS,"path");
	jingxian.setAttribute("d","M0 0 "+32*Math.sin(Rad(th))+" "+32*-Math.cos(Rad(th)));
	jingxian.setAttribute("stroke","#FF0000");
	jingxian.setAttribute("stroke-width",lineWd);
	jingxian.setAttribute("pointer-events","none");
	c2.appendChild(jingxian);
}
for(let wei=0;wei<7;wei++){
	let r=4*(8-wei);
	let weixian=document.createElementNS(NS,"circle");
	weixian.setAttribute("cx",0);
	weixian.setAttribute("cy",0);
	weixian.setAttribute("r",r);
	weixian.setAttribute("fill","none");
	weixian.setAttribute("stroke","#FF0000");
	weixian.setAttribute("stroke-width",lineWd);
	weixian.setAttribute("pointer-events","none");
	c2.appendChild(weixian);
}
svg.appendChild(c2);

//绘制中心
let c3=document.createElementNS(NS,"g");
let c=document.createElementNS(NS,"circle");
c.setAttribute("cx",0);
c.setAttribute("cy",0);
c.setAttribute("r",8);
c.setAttribute("fill","#FFFFFF");
c3.appendChild(c);
function drawArrowMark(ang,fill,x,y){
	let ar=document.createElementNS(NS,"path");
	ar.setAttribute("d","m0 -0.1 0.2 0.4 -0.4 0");
	ar.setAttribute("fill",fill);
	ar.setAttribute("transform","translate("+x+","+y+") rotate("+ang+")");
	ar.setAttribute("pointer-events","painted");
    ar.setAttribute("style","cursor:pointer");
	return ar;
}
for(let i=0;i<7;i++){
	let ang=360/7*i;
	let ar1g=document.createElementNS(NS,"g");
	let ar1=document.createElementNS(NS,"path");
	ar1.setAttribute("d","M"+7.4*Math.sin(Rad(ang))+" "+7.4*-Math.cos(Rad(ang))+"A9 9 0 0 0 "+7.4*Math.sin(Rad(360/7*(i+2)-2*360/168))+" "+7.4*-Math.cos(Rad(360/7*(i+2)-2*360/168)));
	ar1.setAttribute("stroke","#0080FF");
	ar1.setAttribute("fill","none");
	ar1.setAttribute("stroke-width",0.1);
	ar1.setAttribute("pointer-events","painted");
    ar1.setAttribute("style","cursor:pointer");
	ar1g.appendChild(ar1);
	ar1g.appendChild(drawArrowMark(ang-2*360/168,"#0080FF",7.4*Math.sin(Rad(ang)),7.4*-Math.cos(Rad(ang))));
	ar1g.appendChild(drawArrowMark(360/7*(i+2),"#FF8000",7.4*Math.sin(Rad(360/7*(i+2)-2*360/168)),7.4*-Math.cos(Rad(360/7*(i+2)-2*360/168))));
	c3.appendChild(ar1g);
    ar1g.addEventListener("mousedown",function(){
        if(g_Selected.coord()!="-1,-1"){
            if(Math.floor(g_Selected.lie/6)==i){
                select(0,(Math.floor(g_Selected.lie/6)*6+2+Math.floor(g_Selected.lie/3)%2+12)%42); //七和弦一律进行至三和弦，离调和弦一律进行至主调内和弦，变和弦一律进行至调式原始和弦。
            }else if(Math.floor(g_Selected.lie/6)==(i+2)%7){
                select(0,(Math.floor(g_Selected.lie/6)*6+2+Math.floor(g_Selected.lie/3)%2+30)%42); //七和弦一律进行至三和弦，离调和弦一律进行至主调内和弦，变和弦一律进行至调式原始和弦。
            }
        }
    })
	
	let ar2g=document.createElementNS(NS,"g");
    let ar2=document.createElementNS(NS,"path");
    ar2.setAttribute("d","M" + 7.4*Math.sin(Rad(ang+2*360/168)) + " " + 7.4*-Math.cos(Rad(ang+2*360/168)) + "A12.5 12.5 0 0 1 " + 4.9*Math.sin(Rad(360/7*(i+1)+255/49)) + " " + 4.9*-Math.cos(Rad(360/7*(i+1)+255/49)));
    ar2.setAttribute("stroke","#FF8000");
    ar2.setAttribute("fill","none");
    ar2.setAttribute("stroke-width",0.1);
    ar2.setAttribute("pointer-events","painted");
    ar2.setAttribute("style","cursor:pointer");
    ar2g.appendChild(ar2);
    ar2g.appendChild(drawArrowMark(360/7*(i-1),"#0080FF",7.4*Math.sin(Rad(ang+2*360/168)),7.4*-Math.cos(Rad(ang+2*360/168))));
    c3.appendChild(ar2g);
    ar2g.addEventListener("mousedown",function(){
        if(g_Selected.coord()!="-1,-1"){
            if(Math.floor(g_Selected.lie/6)==i){
                select(0,(Math.floor(g_Selected.lie/6)*6+2+Math.floor(g_Selected.lie/3)%2+18)%42); //七和弦一律进行至三和弦，离调和弦一律进行至主调内和弦，变和弦一律进行至调式原始和弦。
            }else if(Math.floor(g_Selected.lie/6)==(i+3)%7){
                select(0,(Math.floor(g_Selected.lie/6)*6+2+Math.floor(g_Selected.lie/3)%2+24)%42); //七和弦一律进行至三和弦，离调和弦一律进行至主调内和弦，变和弦一律进行至调式原始和弦。
            }
        }
    })
	
	let ar3g=document.createElementNS(NS,"g");
    let ar3=document.createElementNS(NS,"path");
    ar3.setAttribute("d","M" + 7.4*Math.sin(Rad(ang+4*360/168)) + " " + 7.4*-Math.cos(Rad(ang+4*360/168)) + "L " + 7.4*Math.sin(Rad(360/7*(i+1)-4*360/168)) + " " + 7.4*-Math.cos(Rad(360/7*(i+1)-4*360/168)));
    ar3.setAttribute("stroke","#FF8000");
    ar3.setAttribute("fill","none");
    ar3.setAttribute("stroke-width",0.1);
    ar3.setAttribute("pointer-events","painted");
    ar3.setAttribute("style","cursor:pointer");
    ar3g.appendChild(ar3);
    ar3g.appendChild(drawArrowMark(360/7*(i+0.5)-90,"#FF8000",7.4*Math.sin(Rad(ang+4*360/168)),7.4*-Math.cos(Rad(ang+4*360/168))));
    ar3g.appendChild(drawArrowMark(360/7*(i+0.5)+90,"#FF8000",7.4*Math.sin(Rad(360/7*(i+1)-4*360/168)),7.4*-Math.cos(Rad(360/7*(i+1)-4*360/168))));
    c3.appendChild(ar3g);
    ar3g.addEventListener("mousedown",function(){
        if(g_Selected.coord()!="-1,-1"){
            if(Math.floor(g_Selected.lie/6)==i){
                select(g_Selected.hang,(g_Selected.lie+6)%42);
            }else if(Math.floor(g_Selected.lie/6)==(i+1)%7){
                select(g_Selected.hang,(g_Selected.lie+36)%42);
            }
        }
    })
}
svg.appendChild(c3);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//交互

let g_CurKeyTonalTone;
//（sharpness是设定调性时确定调性主音音高的媒介。）
let g_IniKeySharpness;
let g_CurTransSharpness=0; //代表当前转调调性相对初始调性变化的sharpness数。
let g_CurKeySharpness;
let g_CurRotateShanqu=0; //代表当前转盘旋转的扇区数。

let g_Selected={ //记录当前选择的单元格坐标，无选择时为-1,-1。
    hang:-1,
    lie:-1,
    coord:function(){
        return this.hang+","+this.lie;
    }
};

let g_Highlighted={ //记录当前鼠标经过处（高亮）的单元格坐标，无高亮时为-1,-1。
    hang:-1,
    lie:-1,
    coord:function(){
        return this.hang+","+this.lie;
    }
};


function getKeyTonalTone(keySharpness){
    while(keySharpness<0) keySharpness+=12;
    let keyTonalTone=13+(7*keySharpness)%12;
    if(keyTonalTone>=20) keyTonalTone-=12; //调整一下八度，使调性根音的绝对音高大于等于20（即自然五级音）的调性主音降低一个八度，以限定调性主音的绝对音高范围。
    return keyTonalTone;
}

function setCurKey(){
    if(g_Selected.coord()!="-1,-1"){
		stopChord(cells[g_Selected.hang][g_Selected.lie].notes);
    }
    
	g_IniKeySharpness=getSharpness(SIniKeyTonal.options[SIniKeyTonal.selectedIndex].value);
    g_CurKeySharpness=g_IniKeySharpness+g_CurTransSharpness;
    g_CurKeyTonalTone=getKeyTonalTone(g_CurKeySharpness);
    TCurKeyTonal.textContent=getKeysig(g_CurKeySharpness);
    
    if(g_Selected.coord()!="-1,-1"){
		playChord(cells[g_Selected.hang][g_Selected.lie].notes);
    }
}
setCurKey();

SIniKeyTonal.onchange=function(){
    setCurKey();
}

BReset.onclick=function(){
    if(g_Selected.coord()!="-1,-1") unselect();
	g_CurTransSharpness=0;
	g_CurRotateShanqu=0;
	setCurKey();
	c2.setAttribute("transform","rotate(0)");
	c3.setAttribute("transform","rotate(0)");
}

function playChord(notes){
	for(let i=0;i<notes.length;i++) tones[notes[i]+g_CurKeyTonalTone].play();
}

function stopChord(notes){
	for(let i=0;i<notes.length;i++) tones[notes[i]+g_CurKeyTonalTone].load();
}

function showChordInfo(hang,lie,box){
	box.style.backgroundColor=colors[tableData[hang][lie][0]];
	box.textContent=cells[hang][lie].name;
	box.appendChild(document.createElement("br"));
	if(cells[hang][lie].aug6Point==-1){
		box.append(cells[hang][lie].notesSig.join(""));
	}else{
		box.append(cells[hang][lie].notesSig.slice(0,cells[hang][lie].aug6Point).join(""));
		let tspan=document.createElement("span");
		tspan.style.color="#FF0000";
		tspan.textContent=cells[hang][lie].notesSig.slice(cells[hang][lie].aug6Point,cells[hang][lie].aug6Point+2).join("");
		box.appendChild(tspan);
		box.append(cells[hang][lie].notesSig.slice(cells[hang][lie].aug6Point+2).join(""));
	}
	if(box==DChordBox){
		if(Math.floor(hang/4)!=0) DChordDescription.append("向");
		DChordDescription.append((Math.floor(lie/3)%2==1 ? "大调" : "小调"));
		switch(Math.floor(hang/4)){
			case 1:
			DChordDescription.append((Math.floor(lie/3)%2==1 ? "DT" : "dt"));break;
			case 2:
			DChordDescription.append((Math.floor(lie/3)%2==1 ? "D" : "d"));break;
			case 3:
			DChordDescription.append((Math.floor(lie/3)%2==1 ? "SII" : "dVII"));break;
			case 4:
			DChordDescription.append((Math.floor(lie/3)%2==1 ? "S" : "s"));break;
			case 5:
			DChordDescription.append((Math.floor(lie/3)%2==1 ? "TS" : "ts"));break;
		}
		DChordDescription.append((hang%2==0 ? "自然调式" : "和声调式"));
		DChordDescription.append((Math.floor(hang/4)==0 ? "调内" : "离调的"));
		DChordDescription.append((Math.floor(hang/2)%2==0 ? "三和弦" : "七和弦"));
		switch(lie%6){
			case 0:
			DChordDescription.append((Math.floor(hang/4)%2==0 ? "，降调式四级变和弦" : "，升调式二级变和弦"));break;
			case 1:
			case 4:
			DChordDescription.append("，降调式二级变和弦");break;
			case 5:
			DChordDescription.append((Math.floor(hang/4)%2==0 ? "，升调式二级变和弦" : "，降调式四级变和弦"));
		}
	}
}

function clearChordInfo(box){
	box.style.backgroundColor="transparent";
	box.textContent="";
	box.appendChild(document.createElement("br"));
	box.appendChild(document.createElement("br"));
	if(box==DChordBox){
		DChordDescription.textContent="";
	}
}

function flashingLoop(){ //用于呈现选定单元格闪烁动画
    if(cells[g_Selected.hang][g_Selected.lie].hl.getAttribute("fill")==HlFill.selected){
        (cells[g_Selected.hang][g_Selected.lie].hl.getAttribute("visibility")==null ? cells[g_Selected.hang][g_Selected.lie].hl.setAttribute("visibility","hidden") : cells[g_Selected.hang][g_Selected.lie].hl.removeAttribute("visibility"));
    }
}
let loopID;

function select(hang,lie){
	if(g_Selected.coord()!="-1,-1") unselect();
	g_Selected.hang=hang;
	g_Selected.lie=lie;
	cells[hang][lie].hl.setAttribute("fill",HlFill.selected);
	playChord(cells[hang][lie].notes);
	clearChordInfo(DChordBox);
	showChordInfo(hang,lie,DChordBox);
    
    loopID=setInterval(flashingLoop,500);
}

function unselect(){
    clearInterval(loopID);
    cells[g_Selected.hang][g_Selected.lie].hl.removeAttribute("visibility");
	if(g_Selected.coord()==g_Highlighted.coord()){
		cells[g_Selected.hang][g_Selected.lie].hl.setAttribute("fill",HlFill.highlighted);
	}else{
		cells[g_Selected.hang][g_Selected.lie].hl.setAttribute("fill",HlFill.none);
	}
	stopChord(cells[g_Selected.hang][g_Selected.lie].notes);
	if(g_Highlighted.coord()=="-1,-1") clearChordInfo(DChordBox);
	g_Selected.hang=-1;
	g_Selected.lie=-1;
}

function highlight(hang,lie){
    g_Highlighted.hang=hang;
    g_Highlighted.lie=lie;
    
    if(!bDragging){
        if(g_Selected.coord()!=g_Highlighted.coord()){
            cells[hang][lie].hl.setAttribute("fill",HlFill.highlighted);
        }
        if(g_Selected.coord()=="-1,-1") showChordInfo(hang,lie,DChordBox);
    }else{ //bDragging==true
        if(cells[hang][lie].hl.getAttribute("fill")!=HlFill.shadowed){
            cells[hang][lie].hl.removeAttribute("visibility");
            cells[hang][lie].hl.setAttribute("fill",HlFill.transposable);
            showChordInfo(hang,lie,DAfterTransBox);
        }
    }
}

function unhighlight(){
    if(!bDragging){
        if(g_Selected.coord()!=g_Highlighted.coord()){
            cells[g_Highlighted.hang][g_Highlighted.lie].hl.setAttribute("fill",HlFill.none);
        }
        if(g_Selected.coord()=="-1,-1") clearChordInfo(DChordBox);
    }else{ //bDragging==true
        if(cells[g_Highlighted.hang][g_Highlighted.lie].hl.getAttribute("fill")!=HlFill.shadowed){
            cells[g_Highlighted.hang][g_Highlighted.lie].hl.setAttribute("fill",(g_Highlighted.coord()==g_Selected.coord() ? HlFill.selected : HlFill.none));
            clearChordInfo(DAfterTransBox);
        }
    }
    
    g_Highlighted.hang=-1;
    g_Highlighted.lie=-1;
}

//用于判断鼠标是否在空白区域（DRight范围内非单元格及c3、各控件上点击，用于取消当前选择。其中是否在非单元格上点击可直接用g_Highlighted判断。
let bOutsideIViewSize=true, bOutsideC3=true, bOutsideBUndo=true, bOutsideBRedo=true, bOutside;
IViewSize.addEventListener("mouseout",function(){bOutsideIViewSize=true;})
IViewSize.addEventListener("mouseover",function(){bOutsideIViewSize=false;})
c3.addEventListener("mouseout",function(){bOutsideC3=true;})
c3.addEventListener("mouseover",function(){bOutsideC3=false;})

//用于转调拖动时判断相关状态的变量
let bCellMouseDown=false; //是否在单元格上按住鼠标
let bDragging=false;
let x0, y0; //用来记录拖动前的初始鼠标坐标

function FixedNotes(notes){ //用于在实行转调时判断两和弦各组成音相对和弦主音的相对音高的组成是否相同。
    let fixedNotes=notes.slice();
    for(let i=0;i<fixedNotes.length;i++){
        fixedNotes[i]-=notes[0];
    }
    return fixedNotes;
}

DRight.addEventListener("mousedown",function(e){
    //若在空白区域点击且当前有选择，则取消当前选择。
    bOutside=g_Highlighted.coord()=="-1,-1" && bOutsideIViewSize && bOutsideC3 && bOutsideBUndo && bOutsideBRedo;
	if(g_Selected.coord()!="-1,-1" && bOutside) unselect();
    
    if(g_Highlighted.coord()!="-1,-1"){
        //若在单元格上点击则选择单元格，或再次点击取消选择。
        if(g_Selected.coord()==g_Highlighted.coord()){
            unselect();
        }else{
            select(g_Highlighted.hang,g_Highlighted.lie);
        }
        
        //更新用于转调拖动的相关变量
        bCellMouseDown=true;
        x0=e.offsetX;
        y0=e.offsetY;
    }
})

//以“自然大调音阶以主和弦扇区作为第零扇区的情况”作为标准，记录下“标准情况”下各扇区差所对应的根音音高差值及sharpness差值（以扇区差为最外层数组索引）。
//实行转调操作时，用转调前后和弦的根音音高差与其扇区差在标准情况下对应的根音音高差进行比较，根据差值计算出差出来的sharpness值，再与标准情况下对应的sharpness差相加。
//以由此得出转调前后的sharpness差（deltaSharpness）并累积于transSharpness以完成转调时相关设定。
deltaSharpnessGettingStd=[[0,0],[4,4],[7,1],[11,5],[2,2],[5,-1],[9,3]];
DRight.addEventListener("mouseup",function(){
    bCellMouseDown=false;

    if(bDragging){
        //转调拖动完成时。
        bDragging=false;
        c2.removeChild(tempCell);
        clearChordInfo(DBeforeTransBox);
        clearChordInfo(DAfterTransBox);
		if(g_Highlighted.coord()!="-1,-1" && cells[g_Highlighted.hang][g_Highlighted.lie].hl.getAttribute("fill")==HlFill.transposable){ //若鼠标位于可转调和弦
			//实行转调操作
			let deltaShanqu; //转调前后和弦所在扇区差
			let deltaTonalTone; //转调前后和弦根音音高差
			let deltaSharpness;
			if(!bDengyin){
				deltaShanqu=(Math.floor(g_Selected.lie/6)-Math.floor(g_Highlighted.lie/6)+7)%7;
				deltaTonalTone=(cells[g_Selected.hang][g_Selected.lie].notes[0]-cells[g_Highlighted.hang][g_Highlighted.lie].notes[0]+12)%12;
			}else{
				bDengyin=false;
				stopChord(invedNotes);
				TDengyin.textContent="";
				
				let invDeltaShanqus=(tableData[g_Selected.hang][g_Selected.lie][0]!=7 ? [0,1,5,6] : [0,1,6]); //可等音转调的和弦各转位对应的相对其原和弦本身的扇区差（增三和弦由于和弦组成音数量不同故需单独判断），用curInvNo-defInvNo并限定范围后的值索引，其索引值需加于转调前后和弦所在扇区差上。
				
				deltaShanqu=(Math.floor(g_Selected.lie/6)-Math.floor(g_Highlighted.lie/6)+invDeltaShanqus[(tableData[g_Selected.hang][g_Selected.lie][0]!=7 ? (curInvNo-defInvNo+4)%4 : curInvNo-defInvNo)]+7)%7;
				deltaTonalTone=(invedNotes[0]-cells[g_Highlighted.hang][g_Highlighted.lie].notes[0]+12)%12;
			}
            deltaSharpness=deltaSharpnessGettingStd[deltaShanqu][1]+((deltaTonalTone-deltaSharpnessGettingStd[deltaShanqu][0]+18)%12-6)*7;
            
			//console.log("扇区差："+deltaShanqu+"，根音音高差："+deltaTonalTone+"，sharpness差："+deltaSharpness);
			g_CurRotateShanqu=(g_CurRotateShanqu+deltaShanqu)%7;
			g_CurTransSharpness+=deltaSharpness;

			c2.setAttribute("transform","rotate("+g_CurRotateShanqu*360/7+")");
			c3.setAttribute("transform","rotate("+g_CurRotateShanqu*360/7+")");
			unselect();
			setCurKey();
			select(g_Highlighted.hang,g_Highlighted.lie);
			
		}else if(bDengyin){ //若鼠标非位于可转调和弦，且处于等音转调状态，则切回非等音转调模式
			//console.log("切回非等音转调模式");
			bDengyin=false;
			//停止播放转位和弦并重新播放原和弦
			stopChord(invedNotes);
			playChord(cells[g_Selected.hang][g_Selected.lie].notes);
			TDengyin.textContent="";
		}
        //遍历单元格以取消阴影。
        for(let tempHang=0;tempHang<24;tempHang++){
            for(let tempLie=0;tempLie<42;tempLie++){
                if(cells[tempHang][tempLie].hl.getAttribute("fill")==HlFill.shadowed || cells[tempHang][tempLie].hl.getAttribute("fill")==HlFill.transposable) cells[tempHang][tempLie].hl.setAttribute("fill",(tempHang+","+tempLie==g_Selected.coord() ? HlFill.selected : (tempHang+","+tempLie==g_Highlighted.coord() ? HlFill.highlighted : HlFill.none)));
            }
        }
    }
})

//实行转调拖动相关操作。
let tempCell;
DRight.addEventListener("mousemove",function(e){
    if(bCellMouseDown){
        if(!bDragging){ //因为只有从非拖动到拖动的转变瞬间才实行一次，因此要用一个变量判断卡住。
			//（这个地方是转调拖动开始时所触发的转调操作，不可能是等音转调（等音转调只有按下回车键后才会触发））。
            bDragging=true; //转调拖动开始时
            if(g_Selected.coord()!="-1,-1") cells[g_Selected.hang][g_Selected.lie].hl.removeAttribute("visibility");
            if(g_Selected.coord()=="-1,-1") select(g_Highlighted.hang,g_Highlighted.lie,1); //如果此时单元格恰好被再次点击取消选中了，则重新选中它开始拖动。
            tempCell=cells[g_Selected.hang][g_Selected.lie].graph.cloneNode(true);
            tempCell.setAttribute("pointer-events","none");
            c2.appendChild(tempCell);
            showChordInfo(g_Selected.hang,g_Selected.lie,DBeforeTransBox);
            //遍历单元格以·为不满足转调条件的添加阴影。
            for(let tempHang=0;tempHang<24;tempHang++){
                for(let tempLie=0;tempLie<42;tempLie++){
                    if(FixedNotes(cells[tempHang][tempLie].notes).join()!=FixedNotes(cells[g_Selected.hang][g_Selected.lie].notes).join() || cells[tempHang][tempLie].notes.join()==cells[g_Selected.hang][g_Selected.lie].notes.join()){
                        cells[tempHang][tempLie].hl.setAttribute("fill",HlFill.shadowed);
                    }
                }
            }
        }
        //但是对于拖动时单元格坐标的变化就是要在拖动时实时响应的了，所以应在变量判断外。（此时bDragging肯定是true的。）
        let dX=e.offsetX-x0;
        let dY=e.offsetY-y0;
        let r=Math.sqrt(Math.pow(dX,2)+Math.pow(dY,2))/width*66;
        let rad=Math.atan2(dY,dX)-Rad(g_CurRotateShanqu*360/7);
        tempCell.setAttribute("transform","translate("+r*Math.cos(rad)+","+r*Math.sin(rad)+")");
    }
})

BGetMajMin.onclick=function(){
	if(g_Selected.coord()!="-1,-1") select(g_Selected.hang,Math.floor(g_Selected.lie/6)*6+5-g_Selected.lie%6);
}

//一些用于等音转调时对和弦转位的相关操作的相关变量。这些变量都应该在刚开始等音转调时被赋初始值。
let bDengyin=false; //表示当前是否是等音转调状态的变量。
let defInvNo; //表示用于等音转调的和弦的“默认转位序数”的临时变量，用于和弦转位时判断和弦是否被转回了原和弦本身，以适时从等音转调模式切回非等音转调模式。
//对于各类小七度和弦或增六和弦，该变量指的是该和弦“相对其对应小七度和弦的转位序数”（这样的话对于以增六和弦作为等音转调的转调前和弦的情况也能都适用）。
//该变量的值由和弦单元格的背景色及aug6Point属性计算得出（依据和弦种类不同计算方法也不同）。
let curInvNo; //代表用于等音转调的和弦当前处于第几转位。
let invedNotes; //代表用于等音转调的和弦转位后的和弦组成音（它将直接修改自和弦单元格的和弦组成音属性的数组）。
let invedName;
let invedNotesSig; //这两个用于显示转位和弦信息，分别代表转位和弦的和弦名和和弦组成音标记。
let invedAug6Point; //用于显示转位和弦组成音标记时对增六度的显示。
//记录各可等音转调的和弦可用于等音转调的各转位序数，以单元格背景色编号作为第一层数组的索引。
availableInvNos=[
[0,2,3], //七和弦
[0,1,3], //小七和弦
[0,1,2], //减小七和弦
[0,2], //减五七和弦
[0,3], //增五七和弦
, //增六三和弦（空余）
[0,1,2,3], //减七和弦
[0,1,2] //增三和弦
];
document.onkeydown=function(e){
	switch(e.key){
		case "ArrowDown":
		if(g_Selected.coord()!="-1,-1") (e.ctrlKey ? select((g_Selected.hang+4)%24,g_Selected.lie,1) : select((g_Selected.hang+1)%24,g_Selected.lie));
		e.preventDefault();break;
		case "ArrowUp":
		if(g_Selected.coord()!="-1,-1") (e.ctrlKey ? select((g_Selected.hang+20)%24,g_Selected.lie,1) : select((g_Selected.hang+23)%24,g_Selected.lie));
		e.preventDefault();break;
		case "ArrowRight":
		if(g_Selected.coord()!="-1,-1") (e.ctrlKey ? select(g_Selected.hang,(g_Selected.lie+6)%42,1) : select(g_Selected.hang,(g_Selected.lie+1)%42));
		e.preventDefault();break;
		case "ArrowLeft":
		if(g_Selected.coord()!="-1,-1") (e.ctrlKey ? select(g_Selected.hang,(g_Selected.lie+36)%42,1) : select(g_Selected.hang,(g_Selected.lie+41)%42));
		e.preventDefault();break;
		case "Enter":
		if(!bCellMouseDown){ //若非在单元格上按住鼠标时才为选择对应同主大小调和弦，否则就触发等音转调的相关判断了。
            if(g_Selected.coord()!="-1,-1") select(g_Selected.hang,Math.floor(g_Selected.lie/6)*6+5-g_Selected.lie%6);
        }else{
			
            //单元格背景色编号为0、1、2、3、4、6、7的为可等音转调和弦。
			//如果此时一个可等音转调的和弦的单元格恰好被再次点击取消选中了，则重新选中它以用于等音转调。
            if(g_Selected.coord()=="-1,-1" && tableData[g_Highlighted.hang][g_Highlighted.lie][0]<=7 && tableData[g_Highlighted.hang][g_Highlighted.lie][0]!=5) select(g_Highlighted.hang,g_Highlighted.lie);
            
			if(g_Selected.coord()!="-1,-1" && tableData[g_Selected.hang][g_Selected.lie][0]<=7 && tableData[g_Selected.hang][g_Selected.lie][0]!=5){
                //触发等音转调
                if(bDragging==false){
                    bDragging=true;
                    cells[g_Selected.hang][g_Selected.lie].hl.removeAttribute("visibility");
                    tempCell=cells[g_Selected.hang][g_Selected.lie].graph.cloneNode(true);
                    tempCell.setAttribute("pointer-events","none");
                    c2.appendChild(tempCell);
                }
                
                //若为刚从非等音转调的模式切入等音转调模式的情况，则初始化一些等音转调相关变量。
                if(!bDengyin){
                    //console.log("初始化等音转调变量");
                    bDengyin=true;
					switch(tableData[g_Selected.hang][g_Selected.lie][0]){
						case 0:
						case 1:
						case 2:
						defInvNo=(3-cells[g_Selected.hang][g_Selected.lie].aug6Point)%4;break;
						case 4: //增五七和弦
						defInvNo=(cells[g_Selected.hang][g_Selected.lie].aug6Point==2 ? 0 : 3);break;
						default:
						defInvNo=0;
					}
                    curInvNo=defInvNo;
                    invedNotes=cells[g_Selected.hang][g_Selected.lie].notes.slice();
					invedName=cells[g_Selected.hang][g_Selected.lie].name;
					invedNotesSig=cells[g_Selected.hang][g_Selected.lie].notesSig.slice();
					invedAug6Point=cells[g_Selected.hang][g_Selected.lie].aug6Point;
                    TDengyin.textContent="（等音转调）";
                }
                
                //执行转位操作，只不过是逆向进行的（向下转位）。
                curInvNo=availableInvNos[tableData[g_Selected.hang][g_Selected.lie][0]][(availableInvNos[tableData[g_Selected.hang][g_Selected.lie][0]].indexOf(curInvNo)+availableInvNos[tableData[g_Selected.hang][g_Selected.lie][0]].length-1)%availableInvNos[tableData[g_Selected.hang][g_Selected.lie][0]].length];
                //console.log("默认转位序数："+defInvNo+"，当前转位序数："+curInvNo);
                
				//在转位前先停止播放旧和弦。
				stopChord(invedNotes);
		
                //先判断是不是转回了原和弦本身，若非则再继续进行剩下的转位操作，否则切回非等音转调模式。
                if(curInvNo!=defInvNo){
                    //作成转位和弦的和弦组成音数组，以及和弦名字符串、和弦组成音标记数组、aug6Point。
                    for(let i=0;i<(availableInvNos[tableData[g_Selected.hang][g_Selected.lie][0]][(availableInvNos[tableData[g_Selected.hang][g_Selected.lie][0]].indexOf(curInvNo)+1)%availableInvNos[tableData[g_Selected.hang][g_Selected.lie][0]].length]-availableInvNos[tableData[g_Selected.hang][g_Selected.lie][0]][availableInvNos[tableData[g_Selected.hang][g_Selected.lie][0]].indexOf(curInvNo)]+cells[g_Selected.hang][g_Selected.lie].notes.length)%cells[g_Selected.hang][g_Selected.lie].notes.length;i++){
                        //根据两相邻可用转位的转位序数差决定从后往前调换几次（判断条件代表当前转位与其上一个相邻可用转位的转位序数差）。
                        invedNotes.unshift(invedNotes.pop()-12); //将末尾音音高降低八度后调至开头。
						//替换和弦名字符串。
						let anchor=(invedName.indexOf("/")!=-1 ? invedName.indexOf("/") : invedName.length);
						let invSig="";
						while(invedName.charAt(anchor-1)>="0" && invedName.charAt(anchor-1)<="9"){
							invSig=invedName.charAt(anchor-1)+invSig;
							anchor--;
						}
						switch(invSig){
							case "7":
							invedName=invedName.slice(0,anchor)+"2"+invedName.slice(anchor+1);break;
							case "2":
							invedName=invedName.slice(0,anchor)+"34"+invedName.slice(anchor+1);break;
							case "34":
							invedName=invedName.slice(0,anchor)+"56"+invedName.slice(anchor+2);break;
							case "56":
							invedName=invedName.slice(0,anchor)+"7"+invedName.slice(anchor+2);break;
							case "":
							invedName=invedName.slice(0,anchor)+"46"+invedName.slice(anchor);break;
							case "46":
							invedName=invedName.slice(0,anchor)+"6"+invedName.slice(anchor+2);break;
							case "6":
							invedName=invedName.slice(0,anchor)+invedName.slice(anchor+1);
						}
						invedNotesSig.unshift(invedNotesSig.pop());
						if(invedAug6Point!=-1){ //对于非增六和弦无需进行此过程。
							invedAug6Point=(invedAug6Point+1)%4;
						}
                    }
					//调整一下八度，将根音的相对音高小于等于-6（即升四/降五级音）的和弦升高一个八度，以限定和弦的音高范围。（就像前面那样。）
					if(invedNotes[0]<=-6){
						for(let i=0;i<invedNotes.length;i++) invedNotes[i]+=12;
					}
					//然后播放转位和弦。
					playChord(invedNotes);
					//显示转位和弦信息。
					clearChordInfo(DBeforeTransBox);
					DBeforeTransBox.style.backgroundColor=colors[tableData[g_Selected.hang][g_Selected.lie][0]];
					DBeforeTransBox.textContent=invedName;
					DBeforeTransBox.appendChild(document.createElement("br"));
					if(invedAug6Point==-1){
						DBeforeTransBox.append(invedNotesSig.join(""));
					}else if(invedAug6Point!=3){
						DBeforeTransBox.append(invedNotesSig.slice(0,invedAug6Point).join(""));
						let tspan=document.createElement("span");
						tspan.style.color="#FF0000";
						tspan.textContent=invedNotesSig.slice(invedAug6Point,invedAug6Point+2).join("");
						DBeforeTransBox.appendChild(tspan);
						DBeforeTransBox.append(invedNotesSig.slice(invedAug6Point+2).join(""));
					}else{
						let tspan1=document.createElement("span");
						tspan1.style.color="#FF0000";
						tspan1.textContent=invedNotesSig[0];
						DBeforeTransBox.appendChild(tspan1);
						DBeforeTransBox.append(invedNotesSig.slice(1,3).join(""));
						let tspan2=document.createElement("span");
						tspan2.style.color="#FF0000";
						tspan2.textContent=invedNotesSig[3];
						DBeforeTransBox.appendChild(tspan2);
					}
					
					//遍历单元格，先取消旧阴影再添加新阴影。（对于等音转调和非等音转调情况的判断条件不一样所以应分开实行。）
					for(let tempHang=0;tempHang<24;tempHang++){
						for(let tempLie=0;tempLie<42;tempLie++){
							if(cells[tempHang][tempLie].hl.getAttribute("fill")==HlFill.shadowed || cells[tempHang][tempLie].hl.getAttribute("fill")==HlFill.transposable) cells[tempHang][tempLie].hl.setAttribute("fill",(tempHang+","+tempLie==g_Selected.coord() ? HlFill.selected : HlFill.none));
						
							if(FixedNotes(cells[tempHang][tempLie].notes).join()!=FixedNotes(invedNotes).join()){
								cells[tempHang][tempLie].hl.setAttribute("fill",HlFill.shadowed);
								//若转调后鼠标停留在的单元格由可转调和弦的变为不可转调和弦的，则需clear DAfterTransBox的ChordInfo。
								if(tempHang+","+tempLie==g_Highlighted.coord()) clearChordInfo(DAfterTransBox);
							}else if(tempHang+","+tempLie==g_Highlighted.coord()){ //若转位后鼠标正好停留在可转调和弦的单元格上
                                cells[tempHang][tempLie].hl.removeAttribute("visibility");
								cells[tempHang][tempLie].hl.setAttribute("fill",HlFill.transposable);
								showChordInfo(tempHang,tempLie,DAfterTransBox);
							}
						}
					}
                }else{ //切回非等音转调模式
                    //console.log("切回非等音转调模式");
                    bDengyin=false;
                    //重新播放原和弦并在转调前和弦显示区中显示原和弦信息
					playChord(cells[g_Selected.hang][g_Selected.lie].notes);
					clearChordInfo(DBeforeTransBox);
					showChordInfo(g_Selected.hang,g_Selected.lie,DBeforeTransBox);
                    TDengyin.textContent="";
					cells[g_Selected.hang][g_Selected.lie].hl.removeAttribute("visibility");
					
					//遍历单元格，先取消旧阴影再添加新阴影。
					for(let tempHang=0;tempHang<24;tempHang++){
						for(let tempLie=0;tempLie<42;tempLie++){
							if(cells[tempHang][tempLie].hl.getAttribute("fill")==HlFill.shadowed || cells[tempHang][tempLie].hl.getAttribute("fill")==HlFill.transposable) cells[tempHang][tempLie].hl.setAttribute("fill",(tempHang+","+tempLie==g_Selected.coord() ? HlFill.selected : HlFill.none));
						
							if(FixedNotes(cells[tempHang][tempLie].notes).join()!=FixedNotes(cells[g_Selected.hang][g_Selected.lie].notes).join() || cells[tempHang][tempLie].notes.join()==cells[g_Selected.hang][g_Selected.lie].notes.join()){
								cells[tempHang][tempLie].hl.setAttribute("fill",HlFill.shadowed);
								//若转调后鼠标停留在的单元格由可转调和弦的变为不可转调和弦的，则需clear DAfterTransBox的ChordInfo。
								if(tempHang+","+tempLie==g_Highlighted.coord()) clearChordInfo(DAfterTransBox);
							}else if(tempHang+","+tempLie==g_Highlighted.coord()){ //若转位后鼠标正好停留在可转调和弦的单元格上
								cells[tempHang][tempLie].hl.setAttribute("fill",HlFill.transposable);
								showChordInfo(tempHang,tempLie,DAfterTransBox);
							}
						}
					}
                }
            }
        }
		e.preventDefault();
	}
}

let viewValue, width;
function setViewSize(value){
    if(value<0.25) value=0.25;
    if(value>5) value=5;
    viewValue=value;
    IViewSize.value=value;
    width=Math.round(iniWidth*value);
    svg.setAttribute("width",width);
    svg.setAttribute("height",width);
    TSize.textContent=width;
}
IViewSize.onchange=function(){
    setViewSize(IViewSize.value);
}
IViewSize.oninput=function(){
    setViewSize(IViewSize.value);
}
setViewSize(1);

document.addEventListener("wheel",function(e){
    if(e.ctrlKey){
        (e.deltaY>0 ? setViewSize(viewValue-0.05) : setViewSize(Number(viewValue)+0.05)); //运算符不由分说自动重载好讨厌。是bug。
        e.preventDefault();
    }
},{passive:false});

//图例
let tuliText=["七和弦及其等音","小七和弦及其等音","减小七和弦及其等音","减五七和弦及其等音","增五七和弦及其等音","","减七和弦","增三和弦","大调其他主调内自然三和弦","大调其他主调内和声三和弦","大调其他主调内自然七和弦","大调其他主调内和声七和弦","小调其他主调内自然三和弦","小调其他主调内和声三和弦","小调其他主调内自然七和弦","小调其他主调内和声七和弦","其他主调内变和弦","其他属离调和弦","其他下属离调和弦"];
let tuli=document.getElementById("tuli");
for(let i=0;i<19;i++){
    let tuliDiv=document.createElement("div");
	tuliDiv.style.backgroundColor=(colors[i]);
	tuliDiv.textContent=tuliText[i];
	if(i<=5){
		let tuliSpan=document.createElement("span");
		tuliSpan.textContent="增六";
		tuliSpan.style.color="#FF0000";
		tuliDiv.appendChild(tuliSpan);
		tuliDiv.append((i!=5 ? "和弦" : "三和弦"));
	}
	tuli.appendChild(tuliDiv);
}
