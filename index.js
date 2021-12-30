let listArray = [];
let list_of_buttons = [];
let i = 0;
let j = 0;
let k = 0;
let rankDataChild = 1;
let rankDataParent = 1;
let firstApiResponse = null;
const api = 'http://10.1.6.87:9000/api/';
// var delApi = 'http://localhost:8080/api/store/'



var config = {
    headers: {
        'Content-Type': 'application/json',
        'Client-Token': 'ZsPdUgSTQbt26kFiRKG/PQ==',
        'X-Auth-Token': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHBsYWRtaW4iLCJhdXRoIjpbIkFkbWluIl0sImlhdCI6MTYzNTkzOTA5MiwiZXhwIjoxNjY3NDc1MDkyfQ.Ob7-BwIlb65zJY9taz0f0_v2k2ToxvH8Ry3JblxWhXQ',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json'
    }
}


window.onload = initialValue;
async function initialValue() {

    let payload = {
        "permissionName": "Link",
        "permissionDescription": "Store Users Management",
        "permissionGroup": "Users",
        "permissionControl": "MENU",
        "icon": "sub-icon",
        "permissionLevel": "Store Users Management",
        "rankData": "19"
    };

    try {
        firstApiResponse = await axios.get(`${api}store/getParentChild`, payload, config);
        let len = firstApiResponse.data[0].payLoad.length;
        console.log(firstApiResponse);





        let parentMenus = document.getElementById('childs');
        if (parentMenus.innerHTML === '') {
            for (let x = 0; x < len; x++) {

                let parentDelId = firstApiResponse.data[0].payLoad[x].id;
                // console.log('hi',parentDelId);

                let value = (firstApiResponse.data[0].payLoad[x].module);

                // let childlen = firstApiResponse.data[0].payLoad[x].menus.length

                // console.log(childlen);
                // for (s = 0; s < childlen; s++) {

                //     let childDelId = firstApiResponse.data[0].payLoad[x].menus[s].subMenu.id;
                //     // console.log(childDelId);


                //     // let childValue = firstApiResponse.data[0].payLoad[x].menus[s].subMenu.subMenuName
                // }
                // console.log(len);
                listArray.push(value);
                // console.log(listArray)
                {


                    let item = document.getElementById('usr');
                    let itemValue = item.value;
                    // listArray.push(itemValue);
                    // console.log(listArray);
                    let additem = document.getElementById('list')
                    let li = document.createElement('li');
                    li.setAttribute('class', 'addeditmes animate__animated animate__backInDown nav-item');
                    li.setAttribute('id', 'list' + i);
                    additem.appendChild(li);

                    let anchor = document.createElement('a');
                    anchor.setAttribute('class', 'anchorstyle nav-link active')
                    anchor.setAttribute('data-toggle', 'tab')
                    anchor.setAttribute('href', '#subdiv');
                    li.appendChild(anchor);

                    let div1 = document.createElement('div');
                    div1.setAttribute('class', 'textcolor animate__animated animate__fadeInDown');

                    let editbtn = document.createElement('button')
                    div1.appendChild(editbtn);
                    editbtn.setAttribute('id', 'edit' + i)
                    editbtn.innerHTML = "<i class='ri-pencil-fill'></i>";

                    let menupara = document.createElement('p')
                    menupara.setAttribute('id', 'menuName' + i)
                    div1.appendChild(menupara);
                    menupara.innerText = value;

                    let div2 = document.createElement('div');
                    div2.setAttribute('class', 'addminus')

                    let btn1 = document.createElement('button');
                    btn1.setAttribute('class', 'btn ')
                    btn1.setAttribute('id', 'add' + i);
                    btn1.innerHTML = "<i class='ri-add-circle-fill'></i>"
                    list_of_buttons.push(btn1);

                    let btn2 = document.createElement('button');
                    btn2.setAttribute('class', 'btn');
                    btn2.setAttribute('id', 'delete' + i);
                    btn2.innerHTML = "<i class='ri-delete-bin-fill'></i>"

                    div2.appendChild(btn1)
                    div2.appendChild(btn2)

                    anchor.appendChild(div1)
                    anchor.appendChild(div2)

                    let remove = async function () {

                        let delIdOfParent = firstApiResponse.data[0].payLoad[x].id;
                        console.log(delIdOfParent);


                        this.parentNode.parentNode.parentNode.remove();
                        await axios.delete(`${api}store/parent/${delIdOfParent}`, payload, config);

                        // document.getElementById('subdiv'+i).remove();  

                        // listArray.splice(i-1,1);
                        // console.log( listArray);
                        //    let x=document.getElementById('list'+(i-1));
                        // console.log(x);
                    };

                    const paragraph = document.getElementById('menuName' + i);

                    subMainDiv = async function () {
                        firstApiResponse1 = await axios.get(`${api}store/getParentChild`, payload, config);
                        console.log(firstApiResponse1.data)
                        let value = (firstApiResponse1.data[0].payLoad[x].module);
                        let childlen = firstApiResponse1.data[0].payLoad[x].menus.length
                        // console.log(childlen);



                        let z = document.getElementById('childs')

                        if (z.innerHTML === '') {
                            let sub = document.createElement('div');
                            sub.setAttribute('id', 'subdiv');
                            sub.setAttribute('class', 'subchildstyle  tab-pane active');
                            z.appendChild(sub);


                            let subInputDiv = document.createElement('div');
                            subInputDiv.setAttribute('id', 'subhead' + j);
                            subInputDiv.setAttribute('class', 'subhead')
                            sub.appendChild(subInputDiv)

                            // let selectbtn = document.createElement('select')
                            // subInputDiv.appendChild(selectbtn)
                            // // selectbtn.innerText='Choose action on drop'
                            // selectbtn.setAttribute('id', 'dropaction')

                            // let optionbtn = document.createElement('option')
                            // selectbtn.appendChild(optionbtn)
                            // optionbtn.innerText = 'swap'
                            // optionbtn.setAttribute('value', 'swap')

                            var nodeName = document.createElement('p');
                            subInputDiv.appendChild(nodeName)
                            nodeName.setAttribute('class', 'nodeName animate__animated animate__backInLeft')
                            nodeName.innerText = menupara.innerText;


                            let ipOuterdiv = document.createElement('div')
                            subInputDiv.appendChild(ipOuterdiv)
                            ipOuterdiv.setAttribute('class', 'ipoutdiv')


                            let subInput = document.createElement('input');
                            // ipOuterdiv.appendChild(subInput)
                            ipOuterdiv.appendChild(subInput)
                            subInput.setAttribute('id', 'subInput' + j);
                            subInput.setAttribute('class', 'subInput');

                            let subInputbtn = document.createElement('button')
                            // ipOuterdiv.appendChild(subInputbtn);
                            ipOuterdiv.appendChild(subInputbtn)
                            subInputbtn.innerText = 'AddChild'
                            subInputbtn.setAttribute('id', 'addsubip' + j)
                            subInputbtn.setAttribute('class', 'addsubip')


                            let a = document.createElement('div')
                            a.setAttribute('id', 'subInputBox')
                            a.setAttribute('class', 'tab-content')

                            sub.appendChild(a)
                            // console.log('innerHtml',a.innerHTML);
                            if (a.innerHTML == '') {
                                if (value == menupara.innerText) {
                                    // console.log(childlen);


                                    for (let s = 0; s < childlen; s++) {
                                        // let childValue = firstApiResponse.data[0].payLoad[x];
                                        let childValue = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.subMenuName
                                        let childURL = `${firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.link}`

                                        // let subInputValue = subInput.value;
                                        let b = document.createElement('div')
                                        b.setAttribute('class', 'subinputboxes tab-pane active item')
                                        b.setAttribute('id', 'menu' + k)
                                        b.setAttribute('draggable', 'true')

                                        a.appendChild(b);

                                        let inputTextDiv = document.createElement('div');
                                        inputTextDiv.setAttribute('id', 'inputText' + k);
                                        inputTextDiv.setAttribute('class', 'inputText');

                                        b.appendChild(inputTextDiv);

                                        let paraAndEditDiv = document.createElement('div')
                                        inputTextDiv.appendChild(paraAndEditDiv);
                                        paraAndEditDiv.setAttribute('class', 'paraAndEdit')


                                        let editbtnSub = document.createElement('button')
                                        paraAndEditDiv.appendChild(editbtnSub)
                                        editbtnSub.setAttribute('id', 'editsub' + k)
                                        editbtnSub.setAttribute('class', 'editsub')
                                        editbtnSub.innerHTML = "<i class='ri-pencil-fill'></i>";

                                        let inputParaDiv = document.createElement('p');
                                        paraAndEditDiv.appendChild(inputParaDiv);
                                        inputParaDiv.setAttribute('class', 'inputParaDiv animate__animated animate__backInDown')
                                        inputParaDiv.setAttribute('id', 'inputParaDiv' + k)

                                        // inputTextDiv.appendChild(inputParaDiv);
                                        // inputParaDiv.innerHTML = "<i class='ri-check-double-line'></i>" + subInputValue;
                                        inputParaDiv.innerHTML = "<i class='ri-check-double-line'></i>" + childValue;

                                        // childValue

                                        let urlDiv = document.createElement('div')
                                        inputTextDiv.appendChild(urlDiv)
                                        urlDiv.setAttribute('class', 'URL')

                                        let editUrlBtn = document.createElement('button')
                                        urlDiv.appendChild(editUrlBtn)
                                        editUrlBtn.setAttribute('id', 'editUrl' + k)
                                        editUrlBtn.setAttribute('class', 'editUrl')
                                        editUrlBtn.innerHTML = "<i class='ri-pencil-fill'></i>"

                                        let urlPara = document.createElement('p')
                                        urlDiv.appendChild(urlPara)
                                        urlPara.setAttribute('id', 'URLpara' + k)
                                        urlPara.setAttribute('class', 'URLpara')
                                        urlPara.innerText = childURL

                                        // urlDiv.innerHTML=editUrlBtn+childURL

                                        let div3 = document.createElement('div')
                                        div3.setAttribute('class', 'childEditDel')

                                        let subInputdel = document.createElement('button')
                                        subInputdel.setAttribute('id', 'ipDelBtn' + k)
                                        subInputdel.setAttribute('class', 'ipDelBtn')


                                        // div3.appendChild(editbtnSub);

                                        div3.appendChild(subInputdel);
                                        inputTextDiv.appendChild(div3);
                                        subInputdel.innerHTML = "<i class='ri-delete-bin-fill'></i>";

                                        // sub.appendChild(inputTextDiv);



                                        let removeSub = async function () {
                                            // console.log('hi')
                                            this.parentNode.parentNode.parentNode.remove();
                                            let delIdOfChild = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.id;

                                            await axios.delete(`${api}store/child/${delIdOfChild}`, payload, config);

                                        };
                                        let subparagraph = document.getElementById('inputParaDiv' + k)
                                        let subparagraphURL = document.getElementById('URLpara' + k)

                                        async function editSubChild() {
                                            firstApiResponse1 = await axios.get(`${api}store/getParentChild`, payload, config);

                                            // let childid=editbtnSub.id;
                                            let childRantData = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.rankData

                                            let childEditId = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.id;
                                            let childEditURL = `${firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.link}`;

                                            console.log(childEditId);


                                            editbtnSub.disabled = true;

                                            subparagraph.contentEditable = true;
                                            subparagraph.style.backgroundColor = "#ebebeb";
                                            subparagraph.style.color = "black";
                                            subparagraph.style.outline = "none";
                                            subparagraph.style.borderRadius = "10px";
                                            subparagraph.style.padding = "1px 10px";
                                            subparagraph.innerHTML = subparagraph.innerText

                                            let editDoneBtn = document.createElement('button')
                                            paraAndEditDiv.appendChild(editDoneBtn);
                                            editDoneBtn.innerHTML = '<i class="ri-arrow-right-fill"></i>';
                                            editDoneBtn.setAttribute('type', 'submit');
                                            editDoneBtn.setAttribute('id', 'end-editing')


                                            editDoneBtn.addEventListener("click", async function () {
                                                subparagraph.contentEditable = false;
                                                subparagraph.innerHTML = "<i class='ri-check-double-line'></i>" + subparagraph.innerText;
                                                subparagraph.style.backgroundColor = "#ebebeb";
                                                setTimeout(function () { subparagraph.style.backgroundColor = "white"; }, 3000);

                                                subparagraph.style.borderRadius = "20px";
                                                subparagraph.style.padding = "0px";

                                                editDoneBtn.style.display = 'none';
                                                editbtnSub.disabled = false;


                                                if (subparagraph.innerHTML === "") {
                                                    alert('Input Content is Empty')
                                                }
                                                // console.log(paragraph.innerHTML);

                                                let childUpdate = await axios({
                                                    method: 'put',
                                                    url: `${api}store/child/${childEditId}`,
                                                    data: {

                                                        "permissionId": childEditId,
                                                        "permissionName": childEditURL,
                                                        "permissionDescription": subparagraph.innerText,
                                                        "permissionGroup": nodeName.innerText,
                                                        "permissionControl": "MENU",
                                                        "icon": "sub-icon",
                                                        "permissionLevel": subparagraph.innerText,
                                                        "rankData": childRantData
                                                    }
                                                });
                                                // console.log(parentUpdate.data);

                                            })


                                            subparagraph.onkeydown = async function (event) {
                                                if (event.key === "Enter") {
                                                    subparagraph.contentEditable = false;
                                                    editDoneBtn.style.display = 'none'

                                                    subparagraph.style.backgroundColor = "#9efefe";
                                                    setTimeout(function () { subparagraph.style.backgroundColor = "white"; }, 3000);

                                                    subparagraph.style.borderRadius = "20px";
                                                    subparagraph.style.padding = "0px";
                                                    subparagraph.innerHTML = "<i class='ri-check-double-line'></i>" + subparagraph.innerText;



                                                    // editDoneBtn2.style.display = 'none';
                                                    editbtnSub.disabled = false;
                                                    if (subparagraph.innerHTML === "") {
                                                        alert('Input Content is Empty')
                                                    }
                                                    let childUpdate = await axios({
                                                        method: 'put',
                                                        url: `${api}store/child/${childEditId}`,
                                                        data: {

                                                            "permissionId": childEditId,
                                                            "permissionName": childURL,
                                                            "permissionDescription": subparagraph.innerText,
                                                            "permissionGroup": nodeName.innerText,
                                                            "permissionControl": "MENU",
                                                            "icon": "sub-icon",
                                                            "permissionLevel": subparagraph.innerText,
                                                            "rankData": childRantData
                                                        }
                                                    });

                                                }
                                            }


                                        }
                                        async function editSubChildURL() {
                                            firstApiResponse1 = await axios.get(`${api}store/getParentChild`, payload, config);

                                            // console.log(subparagraphURL);
                                            // let childid=editbtnSub.id;
                                            let childRantData = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.rankData

                                            let childEditId = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.id;
                                            console.log(childEditId);


                                            editbtnSub.disabled = true;

                                            subparagraphURL.contentEditable = true;
                                            subparagraphURL.style.backgroundColor = "#ebebeb";
                                            subparagraphURL.style.color = "black";
                                            subparagraphURL.style.outline = "none";
                                            subparagraphURL.style.borderRadius = "10px";
                                            subparagraphURL.style.padding = "1px 10px";
                                            subparagraphURL.innerHTML = subparagraphURL.innerText

                                            let editDoneBtn = document.createElement('button')
                                            urlDiv.appendChild(editDoneBtn);
                                            editDoneBtn.innerHTML = '<i class="ri-arrow-right-fill"></i>';
                                            editDoneBtn.setAttribute('type', 'submit');
                                            editDoneBtn.setAttribute('id', 'end-editing')


                                            editDoneBtn.addEventListener("click", async function () {
                                                subparagraphURL.contentEditable = false;
                                                subparagraphURL.innerHTML = subparagraphURL.innerText;
                                                subparagraphURL.style.backgroundColor = "#ebebeb";
                                                setTimeout(function () { subparagraphURL.style.backgroundColor = "white"; }, 3000);

                                                subparagraphURL.style.borderRadius = "20px";
                                                subparagraphURL.style.padding = "0px";

                                                editDoneBtn.style.display = 'none';
                                                editbtnSub.disabled = false;


                                                if (subparagraphURL.innerHTML === "") {
                                                    alert('Input Content is Empty')
                                                }
                                                // console.log(paragraph.innerHTML);

                                                let childUpdate = await axios({
                                                    method: 'put',
                                                    url: `${api}store/child/${childEditId}`,
                                                    data: {

                                                        "permissionId": childEditId,
                                                        "permissionName": subparagraphURL.innerText,
                                                        "permissionDescription": inputParaDiv.innerText,
                                                        "permissionGroup": nodeName.innerText,
                                                        "permissionControl": "MENU",
                                                        "icon": "sub-icon",
                                                        "permissionLevel":inputParaDiv.innerText,
                                                        "rankData": childRantData
                                                    }
                                                });
                                                // console.log(parentUpdate.data);

                                            })


                                            subparagraphURL.onkeydown = async function (event) {
                                                if (event.key === "Enter") {
                                                    subparagraphURL.contentEditable = false;
                                                    editDoneBtn.style.display = 'none'

                                                    subparagraphURL.style.backgroundColor = "#9efefe";
                                                    setTimeout(function () { subparagraphURL.style.backgroundColor = "white"; }, 3000);

                                                    subparagraphURL.style.borderRadius = "20px";
                                                    subparagraphURL.style.padding = "0px";
                                                    subparagraphURL.innerHTML = subparagraphURL.innerText;


                                                    if (subparagraphURL.innerHTML === "") {
                                                        alert('Input Content is Empty')
                                                    }
                                                    // editDoneBtn2.style.display = 'none';
                                                    editbtnSub.disabled = false;
                                                    if (subparagraphURL.innerHTML === "") {
                                                        alert('Input Content is Empty')
                                                    }
                                                    let childUpdate = await axios({
                                                        method: 'put',
                                                        url: `${api}store/child/${childEditId}`,
                                                        data: {

                                                            "permissionId": childEditId,
                                                            "permissionName": subparagraphURL.innerText,
                                                            "permissionDescription": inputParaDiv.innerText,
                                                            "permissionGroup": nodeName.innerText,
                                                            "permissionControl": "MENU",
                                                            "icon": "sub-icon",
                                                            "permissionLevel": inputParaDiv.innerText,
                                                            "rankData": childRantData
                                                        }
                                                    });

                                                }
                                            }


                                        }
                                        document.getElementById('editsub' + k).onclick = editSubChild;
                                        document.getElementById('editUrl' + k).onclick = editSubChildURL;


                                        subInputdel.onclick = removeSub;

                                        // /* draggable element */

                                        // let clickId = document.getElementById('inputText' + k);
                                        // // console.log(clickId)
                                        // let itemm = 0;
                                        // let abc=''

                                        // clickId.addEventListener("mousedown", function () {
                                        //     itemm = clickId;
                                        //     let item=clickId;
                                        //     // let clickItemParent=itemm.parentNode;
                                        //     // let clickItemHTML=itemm.innerHTML;

                                        //     // console.log(clickItemParent);
                                        //     // console.log(clickItemHTML);

                                        //     // console.log(itemm);



                                        //     itemm.addEventListener('dragstart', dragStart);

                                        //     function dragStart(e) {
                                        //         e.dataTransfer.setData('innerHTML', e.target.id);
                                        //         setTimeout(() => {
                                        //             e.target.classList.add('hide');
                                        //         }, 0);
                                        //     }

                                        //     itemm.innerHTML='';

                                        //     /* drop targets */

                                        //     const boxes = document.querySelectorAll('.subinputboxes');
                                        //     // console.log(boxes);

                                        //     boxes.forEach(box => {

                                        //         box.addEventListener('dragenter', dragEnter)
                                        //         box.addEventListener('dragover', dragOver);
                                        //         box.addEventListener('dragleave', dragLeave);
                                        //         box.addEventListener('drop', drop);
                                        //     });


                                        //     function dragEnter(e) {
                                        //         e.preventDefault();
                                        //         e.target.classList.add('drag-over');
                                        //     }

                                        //     function dragOver(e) {
                                        //         e.preventDefault();
                                        //         e.target.classList.add('drag-over');
                                        //     }

                                        //     function dragLeave(e) {
                                        //         e.target.classList.remove('drag-over');
                                        //         abc=this.innerHTML
                                        //         // this.innerHTML=''
                                        //     }

                                        //     function drop(e) {
                                        //         console.log(this)
                                        //         // this.innerHTML='';
                                        //         // this.innerHTML=item;

                                        //         // itemm.innerHTML=abc;
                                        //         e.target.classList.remove('drag-over');



                                        //         // // get the draggable element
                                        //         // const id = e.dataTransfer.getData('innerHTML');
                                        //         // // console.log(id)
                                        //         // const draggable = document.getElementById(id);
                                        //         // // console.log(draggable)

                                        //         // // add it to the drop target
                                        //         // e.target.appendChild(draggable);

                                        //         // // display the draggable element
                                        //         // draggable.classList.remove('hide');

                                        //     }
                                        //     // abc='';
                                        //     // item='';
                                        // })
                                        k++

                                    }

                                }

                                function handleDragStart(e) {
                                    this.style.opacity = "0.4";

                                    dragSrcEl = this;

                                    e.dataTransfer.effectAllowed = "move";
                                    //e.dataTransfer.setData("text/html", this.innerHTML);
                                }

                                function handleDragEnd(e) {
                                    this.style.opacity = "1";
                                }

                                function handleDragEnd(e) {
                                    this.style.opacity = "1";

                                    items.forEach(function (item) {
                                        item.classList.remove("over");
                                    });
                                    dragSrcEl = undefined;
                                }

                                function handleDragOver(e) {
                                    if (e.preventDefault) {
                                        e.preventDefault();
                                    }

                                    return false;
                                }

                                function handleDragEnter(e) {
                                    this.classList.add("over");
                                }

                                function handleDragLeave(e) {
                                    this.classList.remove("over");
                                }

                                function handleDrop(e) {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    if (dragSrcEl !== this) {
                                        if (dropAction === "swap") {
                                            swapItems(dragSrcEl, this);
                                        } else {
                                            shiftItems(dragSrcEl, this);
                                        }
                                        dragSrcEl = undefined;
                                    }
                                    return false;
                                }

                                function swapItems(a, b) {
                                    const tmp = a.innerHTML;
                                    a.innerHTML = b.innerHTML;
                                    b.innerHTML = tmp;
                                }

                                function shiftItems(srcElem, destElem) {
                                    const items = Array.from(document.querySelectorAll(".item"));
                                    const srcIdx = items.indexOf(srcElem);
                                    const destIdx = items.indexOf(destElem);
                                    console.log(`srcIdx = ${srcIdx}, destIdx= ${destIdx}`);
                                    if (srcIdx < destIdx) {
                                        // moving down
                                        for (let i = srcIdx; i < destIdx - 1; i++) {
                                            console.log(`swapping ${i} and ${i + 1}`);
                                            swapItems(items[i], items[i + 1]);
                                        }
                                    } else {
                                        // moving up
                                        for (let i = srcIdx - 1; i >= destIdx; i--) {
                                            console.log(`swapping ${i} and ${i + 1}`);
                                            swapItems(items[i], items[i + 1]);
                                        }
                                    }
                                }

                                let dragSrcEl;
                                let dropAction = "shift";
                                const items = document.querySelectorAll(".item");
                                items.forEach(function (item) {
                                    item.addEventListener("dragstart", handleDragStart);
                                    item.addEventListener("dragover", handleDragOver);
                                    item.addEventListener("dragenter", handleDragEnter);
                                    item.addEventListener("dragleave", handleDragLeave);
                                    item.addEventListener("dragend", handleDragEnd);
                                    item.addEventListener("drop", handleDrop);
                                });
                                // document.querySelector("#dropaction").addEventListener("change", (e) => {
                                //     dropAction = e.target.value;
                                // });

                            }


                            async function getSubIpValue() {
                                firstApiResponse1 = await axios.get(`${api}store/getParentChild`, payload, config);


                                let subInputValue = subInput.value;
                                let b = document.createElement('div')
                                b.setAttribute('class', 'subinputboxes tab-pane active item')
                                b.setAttribute('id', 'menu' + k)
                                b.setAttribute('draggable', 'true')

                                a.appendChild(b);

                                let inputTextDiv = document.createElement('div');
                                inputTextDiv.setAttribute('id', 'inputText' + k);
                                inputTextDiv.setAttribute('class', 'inputText');
                                // inputTextDiv.setAttribute('draggable', 'true')

                                b.appendChild(inputTextDiv);

                                let paraAndEditDiv = document.createElement('div')
                                inputTextDiv.appendChild(paraAndEditDiv);
                                paraAndEditDiv.setAttribute('class', 'paraAndEdit')


                                let editbtnSub = document.createElement('button')
                                paraAndEditDiv.appendChild(editbtnSub)
                                editbtnSub.setAttribute('id', 'editsub' + k)
                                editbtnSub.setAttribute('class', 'editsub')
                                editbtnSub.innerHTML = "<i class='ri-pencil-fill'></i>";

                                let inputParaDiv = document.createElement('p');
                                paraAndEditDiv.appendChild(inputParaDiv);
                                inputParaDiv.setAttribute('class', 'inputParaDiv animate__animated animate__backInDown')
                                inputParaDiv.setAttribute('id', 'inputParaDiv' + k)

                                // inputTextDiv.appendChild(inputParaDiv);
                                inputParaDiv.innerHTML = "<i class='ri-check-double-line'></i>" + subInputValue;

                                let urlDiv = document.createElement('div')
                                inputTextDiv.appendChild(urlDiv)
                                urlDiv.setAttribute('class', 'URL')

                                let editUrlBtn = document.createElement('button')
                                urlDiv.appendChild(editUrlBtn)
                                editUrlBtn.setAttribute('id', 'editUrl' + k)
                                editUrlBtn.setAttribute('class', 'editUrl')
                                editUrlBtn.innerHTML = "<i class='ri-pencil-fill'></i>"

                                let urlPara = document.createElement('p')
                                urlDiv.appendChild(urlPara)
                                urlPara.setAttribute('id', 'URLpara' + k)
                                urlPara.setAttribute('class', 'URLpara')
                                urlPara.innerText = 'Edit Url here'

                                let div3 = document.createElement('div')
                                div3.setAttribute('class', 'childEditDel')

                                let subInputdel = document.createElement('button')
                                subInputdel.setAttribute('id', 'ipDelBtn' + k)
                                subInputdel.setAttribute('class', 'ipDelBtn')



                                div3.appendChild(subInputdel);
                                inputTextDiv.appendChild(div3);
                                subInputdel.innerHTML = "<i class='ri-delete-bin-fill'></i>";

                                // sub.appendChild(inputTextDiv);
                                let subparagraph = document.getElementById('inputParaDiv' + k)
                                let subparagraphURL = document.getElementById('URLpara' + k)


                                await axios({
                                    method: 'post',
                                    url: `${api}store/child`,
                                    data: {

                                        "permissionName": urlPara.innerText,
                                        "permissionDescription": subInputValue,
                                        "permissionGroup": nodeName.innerText,
                                        "permissionControl": "MENU",
                                        "icon": "sub-icon",
                                        "permissionLevel": subInputValue,
                                        "rankData": rankDataChild++
                                    }
                                });
                                firstApiResponse1 = await axios.get(`${api}store/getParentChild`, payload, config);

                                console.log(firstApiResponse1);

                                let removeSub = async function () {
                                    // console.log('hi')
                                    ChildName = subparagraph.innerText;
                                    let childEditLen = firstApiResponse1.data[0].payLoad[x].menus.length;
                                    // console.log(ChildName)
                                    // console.log(childEditLen)
                                    let delIdOfChild = 0;
                                    let childRantData = 0;
                                    for (let s = 0; s < childEditLen; s++) {
                                        let childEditName = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.subMenuName

                                        if (childEditName == ChildName) {
                                            childRantData = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.rankData
                                            delIdOfChild = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.id;


                                        }
                                    }
                                    this.parentNode.parentNode.parentNode.remove();

                                    await axios.delete(`${api}store/child/${delIdOfChild}`, payload, config);
                                };
                                async function editSubChild() {
                                    firstApiResponse1 = await axios.get(`${api}store/getParentChild`, payload, config);


                                    ChildName = subparagraph.innerText;
                                    let childEditLen = firstApiResponse1.data[0].payLoad[x].menus.length;
                                    // console.log(ChildName)
                                    // console.log(childEditLen)
                                    let childEditId = 0;
                                    let childRantData = 0;
                                    let childEditURL = '';
                                    for (let s = 0; s < childEditLen; s++) {
                                        let childEditName = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.subMenuName

                                        if (childEditName == ChildName) {
                                            childRantData = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.rankData
                                            childEditId = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.id
                                            childEditURL = `${firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.link}`;


                                        }
                                    }


                                    editbtnSub.disabled = true;

                                    subparagraph.contentEditable = true;
                                    subparagraph.style.backgroundColor = "#ebebeb";
                                    subparagraph.style.color = "black";
                                    subparagraph.style.outline = "none";
                                    subparagraph.style.borderRadius = "10px";
                                    subparagraph.style.padding = "1px 10px";
                                    subparagraph.innerHTML = subparagraph.innerText

                                    let editDoneBtn = document.createElement('button')
                                    paraAndEditDiv.appendChild(editDoneBtn);
                                    editDoneBtn.innerHTML = '<i class="ri-arrow-right-fill"></i>';
                                    editDoneBtn.setAttribute('type', 'submit');
                                    editDoneBtn.setAttribute('id', 'end-editing')


                                    editDoneBtn.addEventListener("click", async function () {
                                        subparagraph.contentEditable = false;
                                        subparagraph.innerHTML = "<i class='ri-check-double-line'></i>" + subparagraph.innerText;
                                        subparagraph.style.backgroundColor = "#ebebeb";
                                        setTimeout(function () { subparagraph.style.backgroundColor = "white"; }, 3000);

                                        subparagraph.style.borderRadius = "20px";
                                        subparagraph.style.padding = "0px";

                                        editDoneBtn.style.display = 'none';
                                        editbtnSub.disabled = false;


                                        if (subparagraph.innerHTML === "") {
                                            alert('Input Content is Empty')
                                        }
                                        // console.log(paragraph.innerHTML);

                                        let childUpdate = await axios({
                                            method: 'put',
                                            url: `${api}store/child/${childEditId}`,
                                            data: {

                                                "permissionId": childEditId,
                                                "permissionName": childEditURL,
                                                "permissionDescription": subparagraph.innerText,
                                                "permissionGroup": nodeName.innerText,
                                                "permissionControl": "MENU",
                                                "icon": "sub-icon",
                                                "permissionLevel":subparagraph.innerText,
                                                "rankData": childRantData
                                            }
                                        });
                                        // console.log(parentUpdate.data);

                                    })


                                    subparagraph.onkeydown = async function (event) {
                                        if (event.key === "Enter") {
                                            subparagraph.contentEditable = false;
                                            editDoneBtn.style.display = 'none'

                                            subparagraph.style.backgroundColor = "#9efefe";
                                            setTimeout(function () { subparagraph.style.backgroundColor = "white"; }, 3000);

                                            subparagraph.style.borderRadius = "20px";
                                            subparagraph.style.padding = "0px";
                                            subparagraph.innerHTML = "<i class='ri-check-double-line'></i>" + subparagraph.innerText;



                                            // editDoneBtn2.style.display = 'none';
                                            editbtnSub.disabled = false;
                                            if (subparagraph.innerHTML === "") {
                                                alert('Input Content is Empty')
                                            }
                                            let childUpdate = await axios({
                                                method: 'put',
                                                url: `${api}store/child/${childEditId}`,
                                                data: {

                                                    "permissionId": childEditId,
                                                    "permissionName": childEditURL,
                                                    "permissionDescription": subparagraph.innerText,
                                                    "permissionGroup": nodeName.innerText,
                                                    "permissionControl": "MENU",
                                                    "icon": "sub-icon",
                                                    "permissionLevel": subparagraph.innerText,
                                                    "rankData": childRantData
                                                }
                                            });

                                        }
                                    }

                                }
                                async function editSubChildURL() {
                                    firstApiResponse1 = await axios.get(`${api}store/getParentChild`, payload, config);


                                    ChildName = subparagraph.innerText;
                                    let childEditLen = firstApiResponse1.data[0].payLoad[x].menus.length;
                                    // console.log(ChildName)
                                    // console.log(childEditLen)
                                    let childEditId = 0;
                                    let childRantData = 0;
                                    for (let s = 0; s < childEditLen; s++) {
                                        let childEditName = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.subMenuName

                                        if (childEditName == ChildName) {
                                            childRantData = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.rankData
                                            childEditId = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.id

                                        }
                                    }


                                    editbtnSub.disabled = true;

                                    subparagraphURL.contentEditable = true;
                                    subparagraphURL.style.backgroundColor = "#ebebeb";
                                    subparagraphURL.style.color = "black";
                                    subparagraphURL.style.outline = "none";
                                    subparagraphURL.style.borderRadius = "10px";
                                    subparagraphURL.style.padding = "1px 10px";
                                    subparagraphURL.innerHTML = subparagraphURL.innerText

                                    let editDoneBtn = document.createElement('button')
                                    urlDiv.appendChild(editDoneBtn);
                                    editDoneBtn.innerHTML = '<i class="ri-arrow-right-fill"></i>';
                                    editDoneBtn.setAttribute('type', 'submit');
                                    editDoneBtn.setAttribute('id', 'end-editing')


                                    editDoneBtn.addEventListener("click", async function () {
                                        subparagraphURL.contentEditable = false;
                                        subparagraphURL.innerHTML = subparagraphURL.innerText;
                                        subparagraphURL.style.backgroundColor = "#ebebeb";
                                        setTimeout(function () { subparagraphURL.style.backgroundColor = "white"; }, 3000);

                                        subparagraphURL.style.borderRadius = "20px";
                                        subparagraphURL.style.padding = "0px";

                                        editDoneBtn.style.display = 'none';
                                        editbtnSub.disabled = false;


                                        if (subparagraphURL.innerHTML === "") {
                                            alert('Input Content is Empty')
                                        }
                                        // console.log(paragraph.innerHTML);

                                        let childUpdate = await axios({
                                            method: 'put',
                                            url: `${api}store/child/${childEditId}`,
                                            data: {

                                                "permissionId": childEditId,
                                                "permissionName": subparagraphURL.innerText,
                                                "permissionDescription": inputParaDiv.innerText,
                                                "permissionGroup": nodeName.innerText,
                                                "permissionControl": "MENU",
                                                "icon": "sub-icon",
                                                "permissionLevel": inputParaDiv.innerText,
                                                "rankData": childRantData
                                            }
                                        });
                                        // console.log(parentUpdate.data);

                                    })


                                    subparagraphURL.onkeydown = async function (event) {
                                        if (event.key === "Enter") {
                                            subparagraphURL.contentEditable = false;
                                            editDoneBtn.style.display = 'none'

                                            subparagraphURL.style.backgroundColor = "#9efefe";
                                            setTimeout(function () { subparagraphURL.style.backgroundColor = "white"; }, 3000);

                                            subparagraphURL.style.borderRadius = "20px";
                                            subparagraphURL.style.padding = "0px";
                                            subparagraphURL.innerHTML = subparagraphURL.innerText;


                                            if (subparagraphURL.innerHTML === "") {
                                                alert('Input Content is Empty')
                                            }
                                            // editDoneBtn2.style.display = 'none';
                                            editbtnSub.disabled = false;
                                            if (subparagraphURL.innerHTML === "") {
                                                alert('Input Content is Empty')
                                            }
                                            let childUpdate = await axios({
                                                method: 'put',
                                                url: `${api}store/child/${childEditId}`,
                                                data: {

                                                    "permissionId": childEditId,
                                                    "permissionName": subparagraphURL.innerText,
                                                    "permissionDescription": inputParaDiv.innerText,
                                                    "permissionGroup": nodeName.innerText,
                                                    "permissionControl": "MENU",
                                                    "icon": "sub-icon",
                                                    "permissionLevel": inputParaDiv.innerText,
                                                    "rankData": childRantData
                                                }
                                            });

                                        }
                                    }


                                }
                                document.getElementById('editsub' + k).onclick = editSubChild;
                                document.getElementById('editUrl' + k).onclick = editSubChildURL;

                                subInputdel.onclick = removeSub;


                                function handleDragStart(e) {
                                    this.style.opacity = "0.4";

                                    dragSrcEl = this;

                                    e.dataTransfer.effectAllowed = "move";
                                    //e.dataTransfer.setData("text/html", this.innerHTML);
                                }

                                function handleDragEnd(e) {
                                    this.style.opacity = "1";
                                }

                                function handleDragEnd(e) {
                                    this.style.opacity = "1";

                                    items.forEach(function (item) {
                                        item.classList.remove("over");
                                    });
                                    dragSrcEl = undefined;
                                }

                                function handleDragOver(e) {
                                    if (e.preventDefault) {
                                        e.preventDefault();
                                    }

                                    return false;
                                }

                                function handleDragEnter(e) {
                                    this.classList.add("over");
                                }

                                function handleDragLeave(e) {
                                    this.classList.remove("over");
                                }

                                function handleDrop(e) {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    if (dragSrcEl !== this) {
                                        if (dropAction === "swap") {
                                            swapItems(dragSrcEl, this);
                                        } else {
                                            shiftItems(dragSrcEl, this);
                                        }
                                        dragSrcEl = undefined;
                                    }
                                    return false;
                                }

                                function swapItems(a, b) {
                                    const tmp = a.innerHTML;
                                    a.innerHTML = b.innerHTML;
                                    b.innerHTML = tmp;
                                }

                                function shiftItems(srcElem, destElem) {
                                    const items = Array.from(document.querySelectorAll(".item"));
                                    const srcIdx = items.indexOf(srcElem);
                                    const destIdx = items.indexOf(destElem);
                                    console.log(`srcIdx = ${srcIdx}, destIdx= ${destIdx}`);
                                    if (srcIdx < destIdx) {
                                        // moving down
                                        for (let i = srcIdx; i < destIdx - 1; i++) {
                                            console.log(`swapping ${i} and ${i + 1}`);
                                            swapItems(items[i], items[i + 1]);
                                        }
                                    } else {
                                        // moving up
                                        for (let i = srcIdx - 1; i >= destIdx; i--) {
                                            console.log(`swapping ${i} and ${i + 1}`);
                                            swapItems(items[i], items[i + 1]);
                                        }
                                    }
                                }

                                let dragSrcEl;
                                let dropAction = "shift";
                                const items = document.querySelectorAll(".item");
                                items.forEach(function (item) {
                                    item.addEventListener("dragstart", handleDragStart);
                                    item.addEventListener("dragover", handleDragOver);
                                    item.addEventListener("dragenter", handleDragEnter);
                                    item.addEventListener("dragleave", handleDragLeave);
                                    item.addEventListener("dragend", handleDragEnd);
                                    item.addEventListener("drop", handleDrop);
                                });
                                k++
                            }
                            subInputbtn.onclick = getSubIpValue;
                            // /* draggable element */

                            // const itemm = document.querySelector('.inputText');

                            // itemm.addEventListener('dragstart', dragStart);
                            // // console.log(itemm)

                            // function dragStart(e) {
                            //     e.dataTransfer.setData('text/plain', e.target.id);
                            //     // let parentOfDraggableElement=e.target.parentNode;
                            //     // console.log(parentOfDraggableElement);
                            //     setTimeout(() => {
                            //         e.target.classList.add('hide');
                            //     }, 0);
                            // }


                            // /* drop targets */

                            // const boxes = document.querySelectorAll('.subinputboxes');

                            // boxes.forEach(box => {
                            //     box.addEventListener('dragenter', dragEnter)
                            //     box.addEventListener('dragover', dragOver);
                            //     box.addEventListener('dragleave', dragLeave);
                            //     box.addEventListener('drop', drop);
                            // });


                            // function dragEnter(e) {
                            //     e.preventDefault();
                            //     e.target.classList.add('drag-over');
                            //     let parentDivOfDropELement = e.target.parentNode;
                            //     // console.log(showdiv);

                            // }

                            // function dragOver(e) {
                            //     e.preventDefault();
                            //     e.target.classList.add('drag-over');
                            // }

                            // function dragLeave(e) {
                            //     e.target.classList.remove('drag-over');
                            // }

                            // function drop(e) {
                            //     e.target.classList.remove('drag-over');
                            //     // let innerhtmlvalue=e.target
                            //     // console.log(innerhtmlvalue);

                            //     // get the draggable element

                            //     const id = e.dataTransfer.getData('text/plain');
                            //     // console.log(id)
                            //     const draggable = document.getElementById(id);
                            //     // console.log(draggable)

                            //     // add it to the drop target
                            //     e.target.appendChild(draggable);

                            //     // display the draggable element
                            //     draggable.classList.remove('hide');
                            // }
                        }
                        else {
                            let sub1 = document.createElement('div');
                            sub1.setAttribute('id', 'subdiv');
                            sub1.setAttribute('class', 'subchildstyle  tab-pane active');
                            // z.replaceChild(sub,sub1);
                            // z.appendChild(sub1);

                            let subInputDiv = document.createElement('div');
                            subInputDiv.setAttribute('id', 'subhead' + j);
                            subInputDiv.setAttribute('class', 'subhead')
                            sub1.appendChild(subInputDiv)

                            let nodeName = document.createElement('p');
                            subInputDiv.appendChild(nodeName)
                            nodeName.setAttribute('class', 'nodeName animate__animated animate__backInLeft')
                            nodeName.innerText = menupara.innerText;


                            let ipOuterdiv = document.createElement('div')
                            subInputDiv.appendChild(ipOuterdiv)
                            ipOuterdiv.setAttribute('class', 'ipoutdiv')


                            let subInput = document.createElement('input');
                            // ipOuterdiv.appendChild(subInput)
                            ipOuterdiv.appendChild(subInput)
                            subInput.setAttribute('id', 'subInput' + j);
                            subInput.setAttribute('class', 'subInput');


                            let subInputbtn = document.createElement('button')
                            // ipOuterdiv.appendChild(subInputbtn);
                            ipOuterdiv.appendChild(subInputbtn)
                            subInputbtn.innerText = 'AddChild'
                            subInputbtn.setAttribute('id', 'addsubip' + j)
                            subInputbtn.setAttribute('class', 'addsubip')


                            let a = document.createElement('div')
                            a.setAttribute('id', 'subInputBox')
                            a.setAttribute('class', 'tab-content')

                            sub1.appendChild(a)
                            var sp2 = document.getElementById("subdiv");
                            z.replaceChild(sub1, sp2);
                            if (a.innerHTML == '') {

                                console.log(firstApiResponse1);
                                // childlen = childlen + 1;
                                // console.log(childlen);

                                if (value == menupara.innerText) {

                                    for (let s = 0; s < childlen; s++) {

                                        let childValue = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.subMenuName
                                        let childURL = `${firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.link}`

                                        // console.log(childValue)

                                        // let subInputValue = subInput.value;
                                        let b = document.createElement('div')
                                        b.setAttribute('class', 'subinputboxes tab-pane active item')
                                        b.setAttribute('id', 'menu' + k)
                                        b.setAttribute('draggable', 'true')

                                        a.appendChild(b);

                                        let inputTextDiv = document.createElement('div');
                                        inputTextDiv.setAttribute('id', 'inputText' + k);
                                        inputTextDiv.setAttribute('class', 'inputText');
                                        // inputTextDiv.setAttribute('draggable', 'true')

                                        b.appendChild(inputTextDiv);

                                        let paraAndEditDiv = document.createElement('div')
                                        inputTextDiv.appendChild(paraAndEditDiv);
                                        paraAndEditDiv.setAttribute('class', 'paraAndEdit')


                                        let editbtnSub = document.createElement('button')
                                        paraAndEditDiv.appendChild(editbtnSub)
                                        editbtnSub.setAttribute('id', 'editsub' + k)
                                        editbtnSub.setAttribute('class', 'editsub')
                                        editbtnSub.innerHTML = "<i class='ri-pencil-fill'></i>";

                                        let inputParaDiv = document.createElement('p');
                                        paraAndEditDiv.appendChild(inputParaDiv);
                                        inputParaDiv.setAttribute('class', 'inputParaDiv animate__animated animate__backInDown')
                                        inputParaDiv.setAttribute('id', 'inputParaDiv' + k)
                                        inputParaDiv.innerHTML = "<i class='ri-check-double-line'></i>" + childValue;


                                        let urlDiv = document.createElement('div')
                                        inputTextDiv.appendChild(urlDiv)
                                        urlDiv.setAttribute('class', 'URL')

                                        let editUrlBtn = document.createElement('button')
                                        urlDiv.appendChild(editUrlBtn)
                                        editUrlBtn.setAttribute('class', 'editUrl')
                                        editUrlBtn.setAttribute('id', 'editUrl' + k)
                                        editUrlBtn.innerHTML = "<i class='ri-pencil-fill'></i>"

                                        let urlPara = document.createElement('p')
                                        urlDiv.appendChild(urlPara)
                                        urlPara.setAttribute('class', 'URLpara')
                                        urlPara.setAttribute('id', 'URLpara' + k)
                                        urlPara.innerText = childURL


                                        let div3 = document.createElement('div')
                                        div3.setAttribute('class', 'childEditDel')

                                        let subInputdel = document.createElement('button')
                                        subInputdel.setAttribute('id', 'ipDelBtn' + k)
                                        subInputdel.setAttribute('class', 'ipDelBtn')



                                        div3.appendChild(subInputdel);
                                        inputTextDiv.appendChild(div3);
                                        subInputdel.innerHTML = "<i class='ri-delete-bin-fill'></i>";

                                        let removeSub = async function () {
                                            this.parentNode.parentNode.parentNode.remove();
                                            let delIdOfChild = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.id;

                                            await axios.delete(`${api}store/child/${delIdOfChild}`, payload, config);
                                        };
                                        subInputdel.onclick = removeSub;

                                        let subparagraph = document.getElementById('inputParaDiv' + k)
                                        let subparagraphURL = document.getElementById('URLpara' + k)


                                        async function editSubChild() {
                                            firstApiResponse1 = await axios.get(`${api}store/getParentChild`, payload, config);

                                            // let childid=editbtnSub.id;
                                            let childRantData = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.rankData

                                            let childEditId = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.id;
                                            let childEditURL = `${firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.link}`;

                                            console.log(childEditId);


                                            editbtnSub.disabled = true;

                                            subparagraph.contentEditable = true;
                                            subparagraph.style.backgroundColor = "#ebebeb";
                                            subparagraph.style.color = "black";
                                            subparagraph.style.outline = "none";
                                            subparagraph.style.borderRadius = "10px";
                                            subparagraph.style.padding = "1px 10px";
                                            subparagraph.innerHTML = subparagraph.innerText

                                            let editDoneBtn = document.createElement('button')
                                            paraAndEditDiv.appendChild(editDoneBtn);
                                            editDoneBtn.innerHTML = '<i class="ri-arrow-right-fill"></i>';
                                            editDoneBtn.setAttribute('type', 'submit');
                                            editDoneBtn.setAttribute('id', 'end-editing')


                                            editDoneBtn.addEventListener("click", async function () {
                                                subparagraph.contentEditable = false;
                                                subparagraph.innerHTML = "<i class='ri-check-double-line'></i>" + subparagraph.innerText;
                                                subparagraph.style.backgroundColor = "#ebebeb";
                                                setTimeout(function () { subparagraph.style.backgroundColor = "white"; }, 3000);

                                                subparagraph.style.borderRadius = "20px";
                                                subparagraph.style.padding = "0px";

                                                editDoneBtn.style.display = 'none';
                                                editbtnSub.disabled = false;

                                                if (subparagraph.innerHTML === "") {
                                                    alert('Input Content is Empty')
                                                }

                                                // console.log(paragraph.innerHTML);

                                                let childUpdate = await axios({
                                                    method: 'put',
                                                    url: `${api}store/child/${childEditId}`,
                                                    data: {

                                                        "permissionId": childEditId,
                                                        "permissionName": childEditURL,
                                                        "permissionDescription": subparagraph.innerText,
                                                        "permissionGroup": nodeName.innerText,
                                                        "permissionControl": "MENU",
                                                        "icon": "sub-icon",
                                                        "permissionLevel": subparagraph.innerText,
                                                        "rankData": childRantData
                                                    }
                                                });
                                                // console.log(parentUpdate.data);

                                            })


                                            subparagraph.onkeydown = async function (event) {
                                                if (event.key === "Enter") {
                                                    subparagraph.contentEditable = false;
                                                    editDoneBtn.style.display = 'none'

                                                    subparagraph.style.backgroundColor = "#9efefe";
                                                    setTimeout(function () { subparagraph.style.backgroundColor = "white"; }, 3000);

                                                    subparagraph.style.borderRadius = "20px";
                                                    subparagraph.style.padding = "0px";
                                                    subparagraph.innerHTML = "<i class='ri-check-double-line'></i>" + subparagraph.innerText;



                                                    // editDoneBtn2.style.display = 'none';
                                                    editbtnSub.disabled = false;
                                                    if (subparagraph.innerHTML === "") {
                                                        alert('Input Content is Empty')
                                                    }
                                                    let childUpdate = await axios({
                                                        method: 'put',
                                                        url: `${api}store/child/${childEditId}`,
                                                        data: {

                                                            "permissionId": childEditId,
                                                            "permissionName": childEditURL,
                                                            "permissionDescription": subparagraph.innerText,
                                                            "permissionGroup": nodeName.innerText,
                                                            "permissionControl": "MENU",
                                                            "icon": "sub-icon",
                                                            "permissionLevel": subparagraph.innerText,
                                                            "rankData": childRantData
                                                        }
                                                    });

                                                }
                                            }


                                        }
                                        async function editSubChildURL() {
                                            firstApiResponse1 = await axios.get(`${api}store/getParentChild`, payload, config);

                                            // console.log(subparagraphURL);
                                            // let childid=editbtnSub.id;
                                            let childRantData = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.rankData

                                            let childEditId = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.id;
                                            console.log(childEditId);


                                            editbtnSub.disabled = true;

                                            subparagraphURL.contentEditable = true;
                                            subparagraphURL.style.backgroundColor = "#ebebeb";
                                            subparagraphURL.style.color = "black";
                                            subparagraphURL.style.outline = "none";
                                            subparagraphURL.style.borderRadius = "10px";
                                            subparagraphURL.style.padding = "1px 10px";
                                            subparagraphURL.innerHTML = subparagraphURL.innerText

                                            let editDoneBtn = document.createElement('button')
                                            urlDiv.appendChild(editDoneBtn);
                                            editDoneBtn.innerHTML = '<i class="ri-arrow-right-fill"></i>';
                                            editDoneBtn.setAttribute('type', 'submit');
                                            editDoneBtn.setAttribute('id', 'end-editing')


                                            editDoneBtn.addEventListener("click", async function () {
                                                subparagraphURL.contentEditable = false;
                                                subparagraphURL.innerHTML = subparagraphURL.innerText;
                                                subparagraphURL.style.backgroundColor = "#ebebeb";
                                                setTimeout(function () { subparagraphURL.style.backgroundColor = "white"; }, 3000);

                                                subparagraphURL.style.borderRadius = "20px";
                                                subparagraphURL.style.padding = "0px";

                                                editDoneBtn.style.display = 'none';
                                                editbtnSub.disabled = false;


                                                if (subparagraphURL.innerHTML === "") {
                                                    alert('Input Content is Empty')
                                                }
                                                // console.log(paragraph.innerHTML);

                                                let childUpdate = await axios({
                                                    method: 'put',
                                                    url: `${api}store/child/${childEditId}`,
                                                    data: {

                                                        "permissionId": childEditId,
                                                        "permissionName": subparagraphURL.innerText,
                                                        "permissionDescription": inputParaDiv.innerText,
                                                        "permissionGroup": nodeName.innerText,
                                                        "permissionControl": "MENU",
                                                        "icon": "sub-icon",
                                                        "permissionLevel":inputParaDiv.innerText,
                                                        "rankData": childRantData
                                                    }
                                                });
                                                // console.log(parentUpdate.data);

                                            })


                                            subparagraphURL.onkeydown = async function (event) {
                                                if (event.key === "Enter") {
                                                    subparagraphURL.contentEditable = false;
                                                    editDoneBtn.style.display = 'none'

                                                    subparagraphURL.style.backgroundColor = "#9efefe";
                                                    setTimeout(function () { subparagraphURL.style.backgroundColor = "white"; }, 3000);

                                                    subparagraphURL.style.borderRadius = "20px";
                                                    subparagraphURL.style.padding = "0px";
                                                    subparagraphURL.innerHTML = subparagraphURL.innerText;


                                                    if (subparagraphURL.innerHTML === "") {
                                                        alert('Input Content is Empty')
                                                    }
                                                    // editDoneBtn2.style.display = 'none';
                                                    editbtnSub.disabled = false;
                                                    if (subparagraphURL.innerHTML === "") {
                                                        alert('Input Content is Empty')
                                                    }
                                                    let childUpdate = await axios({
                                                        method: 'put',
                                                        url: `${api}store/child/${childEditId}`,
                                                        data: {

                                                            "permissionId": childEditId,
                                                            "permissionName": subparagraphURL.innerText,
                                                            "permissionDescription": inputParaDiv.innerText,
                                                            "permissionGroup": nodeName.innerText,
                                                            "permissionControl": "MENU",
                                                            "icon": "sub-icon",
                                                            "permissionLevel": inputParaDiv.innerText,
                                                            "rankData": childRantData
                                                        }
                                                    });

                                                }
                                            }


                                        }
                                        document.getElementById('editsub' + k).onclick = editSubChild;
                                        document.getElementById('editUrl' + k).onclick = editSubChildURL;

                                        k++

                                    }
                                }

                                function handleDragStart(e) {
                                    this.style.opacity = "0.4";

                                    dragSrcEl = this;

                                    e.dataTransfer.effectAllowed = "move";
                                    //e.dataTransfer.setData("text/html", this.innerHTML);
                                }

                                function handleDragEnd(e) {
                                    this.style.opacity = "1";
                                }

                                function handleDragEnd(e) {
                                    this.style.opacity = "1";

                                    items.forEach(function (item) {
                                        item.classList.remove("over");
                                    });
                                    dragSrcEl = undefined;
                                }

                                function handleDragOver(e) {
                                    if (e.preventDefault) {
                                        e.preventDefault();
                                    }

                                    return false;
                                }

                                function handleDragEnter(e) {
                                    this.classList.add("over");
                                }

                                function handleDragLeave(e) {
                                    this.classList.remove("over");
                                }

                                function handleDrop(e) {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    if (dragSrcEl !== this) {
                                        if (dropAction === "swap") {
                                            swapItems(dragSrcEl, this);
                                        } else {
                                            shiftItems(dragSrcEl, this);
                                        }
                                        dragSrcEl = undefined;
                                    }
                                    return false;
                                }

                                function swapItems(a, b) {
                                    const tmp = a.innerHTML;
                                    a.innerHTML = b.innerHTML;
                                    b.innerHTML = tmp;
                                }

                                function shiftItems(srcElem, destElem) {
                                    const items = Array.from(document.querySelectorAll(".item"));
                                    const srcIdx = items.indexOf(srcElem);
                                    const destIdx = items.indexOf(destElem);
                                    console.log(`srcIdx = ${srcIdx}, destIdx= ${destIdx}`);
                                    if (srcIdx < destIdx) {
                                        // moving down
                                        for (let i = srcIdx; i < destIdx - 1; i++) {
                                            console.log(`swapping ${i} and ${i + 1}`);
                                            swapItems(items[i], items[i + 1]);
                                        }
                                    } else {
                                        // moving up
                                        for (let i = srcIdx - 1; i >= destIdx; i--) {
                                            console.log(`swapping ${i} and ${i + 1}`);
                                            swapItems(items[i], items[i + 1]);
                                        }
                                    }
                                }

                                let dragSrcEl;
                                let dropAction = "shift";
                                const items = document.querySelectorAll(".item");
                                items.forEach(function (item) {
                                    item.addEventListener("dragstart", handleDragStart);
                                    item.addEventListener("dragover", handleDragOver);
                                    item.addEventListener("dragenter", handleDragEnter);
                                    item.addEventListener("dragleave", handleDragLeave);
                                    item.addEventListener("dragend", handleDragEnd);
                                    item.addEventListener("drop", handleDrop);
                                });
                                // document.querySelector("#dropaction").addEventListener("change", (e) => {
                                //     dropAction = e.target.value;
                                // });

                            }

                            async function getSubIpValue() {
                                firstApiResponse1 = await axios.get(`${api}store/getParentChild`, payload, config);


                                let subInputValue = subInput.value;
                                let b = document.createElement('div')
                                b.setAttribute('class', 'subinputboxes tab-pane active item')
                                b.setAttribute('id', 'menu' + k)
                                b.setAttribute('draggable', 'true')

                                a.appendChild(b);

                                let inputTextDiv = document.createElement('div');
                                inputTextDiv.setAttribute('id', 'inputText' + k);
                                inputTextDiv.setAttribute('class', 'inputText');
                                // inputTextDiv.setAttribute('draggable', 'true')

                                b.appendChild(inputTextDiv);

                                let paraAndEditDiv = document.createElement('div')
                                inputTextDiv.appendChild(paraAndEditDiv);
                                paraAndEditDiv.setAttribute('class', 'paraAndEdit')


                                let editbtnSub = document.createElement('button')
                                paraAndEditDiv.appendChild(editbtnSub)
                                editbtnSub.setAttribute('id', 'editsub' + k)
                                editbtnSub.setAttribute('class', 'editsub')
                                editbtnSub.innerHTML = "<i class='ri-pencil-fill'></i>";

                                let inputParaDiv = document.createElement('p');
                                paraAndEditDiv.appendChild(inputParaDiv);
                                inputParaDiv.setAttribute('class', 'inputParaDiv animate__animated animate__backInDown')
                                inputParaDiv.setAttribute('id', 'inputParaDiv' + k)
                                inputParaDiv.innerHTML = "<i class='ri-check-double-line'></i>" + subInputValue;


                                let urlDiv = document.createElement('div')
                                inputTextDiv.appendChild(urlDiv)
                                urlDiv.setAttribute('class', 'URL')

                                let editUrlBtn = document.createElement('button')
                                urlDiv.appendChild(editUrlBtn)
                                editUrlBtn.setAttribute('class', 'editUrl')
                                editUrlBtn.setAttribute('id', 'editUrl' + k)
                                editUrlBtn.innerHTML = "<i class='ri-pencil-fill'></i>"

                                let urlPara = document.createElement('p')
                                urlDiv.appendChild(urlPara)
                                urlPara.setAttribute('class', 'URLpara')
                                urlPara.setAttribute('id', 'URLpara' + k)
                                urlPara.innerText = 'Edit Url here'

                                let div3 = document.createElement('div')
                                div3.setAttribute('class', 'childEditDel')


                                let subInputdel = document.createElement('button')
                                subInputdel.setAttribute('id', 'ipDelBtn' + k)
                                subInputdel.setAttribute('class', 'ipDelBtn')




                                div3.appendChild(subInputdel);
                                inputTextDiv.appendChild(div3);
                                subInputdel.innerHTML = "<i class='ri-delete-bin-fill'></i>";

                                await axios({
                                    method: 'post',
                                    url: `${api}store/child`,
                                    data: {

                                        "permissionName": urlPara.innerText,
                                        "permissionDescription": subInputValue,
                                        "permissionGroup": nodeName.innerText,
                                        "permissionControl": "MENU",
                                        "icon": "sub-icon",
                                        "permissionLevel": subInputValue,
                                        "rankData": rankDataChild++
                                    }
                                });
                                firstApiResponse1 = await axios.get(`${api}store/getParentChild`, payload, config);

                                console.log(firstApiResponse1);

                                let removeSub = async function () {

                                    ChildName = subparagraph.innerText;
                                    let childEditLen = firstApiResponse1.data[0].payLoad[x].menus.length;
                                    // console.log(ChildName)
                                    // console.log(childEditLen)
                                    let delIdOfChild = 0;
                                    let childRantData = 0;
                                    for (let s = 0; s < childEditLen; s++) {
                                        let childEditName = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.subMenuName

                                        if (childEditName == ChildName) {
                                            childRantData = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.rankData
                                            delIdOfChild = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.id;


                                        }
                                    }

                                    this.parentNode.parentNode.parentNode.remove();

                                    await axios.delete(`${api}store/child/${delIdOfChild}`, payload, config);
                                };
                                let subparagraph = document.getElementById('inputParaDiv' + k)
                                let subparagraphURL = document.getElementById('URLpara' + k)

                                async function editSubChild() {
                                    firstApiResponse1 = await axios.get(`${api}store/getParentChild`, payload, config);


                                    ChildName = subparagraph.innerText;
                                    let childEditLen = firstApiResponse1.data[0].payLoad[x].menus.length;
                                    // console.log(ChildName)
                                    // console.log(childEditLen)
                                    let childEditId = 0;
                                    let childRantData = 0;
                                    let childEditURL = ''
                                    for (let s = 0; s < childEditLen; s++) {
                                        let childEditName = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.subMenuName

                                        if (childEditName == ChildName) {
                                            childRantData = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.rankData
                                            childEditId = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.id
                                            childEditURL = `${firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.link}`;


                                        }
                                    }


                                    editbtnSub.disabled = true;

                                    subparagraph.contentEditable = true;
                                    subparagraph.style.backgroundColor = "#ebebeb";
                                    subparagraph.style.color = "black";
                                    subparagraph.style.outline = "none";
                                    subparagraph.style.borderRadius = "10px";
                                    subparagraph.style.padding = "1px 10px";
                                    subparagraph.innerHTML = subparagraph.innerText

                                    let editDoneBtn = document.createElement('button')
                                    paraAndEditDiv.appendChild(editDoneBtn);
                                    editDoneBtn.innerHTML = '<i class="ri-arrow-right-fill"></i>';
                                    editDoneBtn.setAttribute('type', 'submit');
                                    editDoneBtn.setAttribute('id', 'end-editing')


                                    editDoneBtn.addEventListener("click", async function () {
                                        subparagraph.contentEditable = false;
                                        subparagraph.innerHTML = "<i class='ri-check-double-line'></i>" + subparagraph.innerText;
                                        subparagraph.style.backgroundColor = "#ebebeb";
                                        setTimeout(function () { subparagraph.style.backgroundColor = "white"; }, 3000);

                                        subparagraph.style.borderRadius = "20px";
                                        subparagraph.style.padding = "0px";

                                        editDoneBtn.style.display = 'none';
                                        editbtnSub.disabled = false;


                                        if (subparagraph.innerHTML === "") {
                                            alert('Input Content is Empty')
                                        }
                                        // console.log(paragraph.innerHTML);

                                        let childUpdate = await axios({
                                            method: 'put',
                                            url: `${api}store/child/${childEditId}`,
                                            data: {

                                                "permissionId": childEditId,
                                                "permissionName": childEditURL,
                                                "permissionDescription": subparagraph.innerText,
                                                "permissionGroup": nodeName.innerText,
                                                "permissionControl": "MENU",
                                                "icon": "sub-icon",
                                                "permissionLevel":subparagraph.innerText,
                                                "rankData": childRantData
                                            }
                                        });
                                        // console.log(parentUpdate.data);

                                    })


                                    subparagraph.onkeydown = async function (event) {
                                        if (event.key === "Enter") {
                                            subparagraph.contentEditable = false;
                                            editDoneBtn.style.display = 'none'

                                            subparagraph.style.backgroundColor = "#9efefe";
                                            setTimeout(function () { subparagraph.style.backgroundColor = "white"; }, 3000);

                                            subparagraph.style.borderRadius = "20px";
                                            subparagraph.style.padding = "0px";
                                            subparagraph.innerHTML = "<i class='ri-check-double-line'></i>" + subparagraph.innerText;



                                            // editDoneBtn2.style.display = 'none';
                                            editbtnSub.disabled = false;
                                            if (subparagraph.innerHTML === "") {
                                                alert('Input Content is Empty')
                                            }
                                            let childUpdate = await axios({
                                                method: 'put',
                                                url: `${api}store/child/${childEditId}`,
                                                data: {

                                                    "permissionId": childEditId,
                                                    "permissionName": childEditURL,
                                                    "permissionDescription": subparagraph.innerText,
                                                    "permissionGroup": nodeName.innerText,
                                                    "permissionControl": "MENU",
                                                    "icon": "sub-icon",
                                                    "permissionLevel": subparagraph.innerText,
                                                    "rankData": childRantData
                                                }
                                            });

                                        }
                                    }

                                }
                                async function editSubChildURL() {
                                    firstApiResponse1 = await axios.get(`${api}store/getParentChild`, payload, config);


                                    ChildName = subparagraph.innerText;
                                    let childEditLen = firstApiResponse1.data[0].payLoad[x].menus.length;
                                    // console.log(ChildName)
                                    // console.log(childEditLen)
                                    let childEditId = 0;
                                    let childRantData = 0;
                                    for (let s = 0; s < childEditLen; s++) {
                                        let childEditName = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.subMenuName

                                        if (childEditName == ChildName) {
                                            childRantData = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.rankData
                                            childEditId = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.id

                                        }
                                    }


                                    editbtnSub.disabled = true;

                                    subparagraphURL.contentEditable = true;
                                    subparagraphURL.style.backgroundColor = "#ebebeb";
                                    subparagraphURL.style.color = "black";
                                    subparagraphURL.style.outline = "none";
                                    subparagraphURL.style.borderRadius = "10px";
                                    subparagraphURL.style.padding = "1px 10px";
                                    subparagraphURL.innerHTML = subparagraphURL.innerText

                                    let editDoneBtn = document.createElement('button')
                                    urlDiv.appendChild(editDoneBtn);
                                    editDoneBtn.innerHTML = '<i class="ri-arrow-right-fill"></i>';
                                    editDoneBtn.setAttribute('type', 'submit');
                                    editDoneBtn.setAttribute('id', 'end-editing')


                                    editDoneBtn.addEventListener("click", async function () {
                                        subparagraphURL.contentEditable = false;
                                        subparagraphURL.innerHTML = subparagraphURL.innerText;
                                        subparagraphURL.style.backgroundColor = "#ebebeb";
                                        setTimeout(function () { subparagraphURL.style.backgroundColor = "white"; }, 3000);

                                        subparagraphURL.style.borderRadius = "20px";
                                        subparagraphURL.style.padding = "0px";

                                        editDoneBtn.style.display = 'none';
                                        editbtnSub.disabled = false;


                                        if (subparagraphURL.innerHTML === "") {
                                            alert('Input Content is Empty')
                                        }
                                        // console.log(paragraph.innerHTML);

                                        let childUpdate = await axios({
                                            method: 'put',
                                            url: `${api}store/child/${childEditId}`,
                                            data: {

                                                "permissionId": childEditId,
                                                "permissionName": subparagraphURL.innerText,
                                                "permissionDescription": inputParaDiv.innerText,
                                                "permissionGroup": nodeName.innerText,
                                                "permissionControl": "MENU",
                                                "icon": "sub-icon",
                                                "permissionLevel": inputParaDiv.innerText,
                                                "rankData": childRantData
                                            }
                                        });
                                        // console.log(parentUpdate.data);

                                    })


                                    subparagraphURL.onkeydown = async function (event) {
                                        if (event.key === "Enter") {
                                            subparagraphURL.contentEditable = false;
                                            editDoneBtn.style.display = 'none'

                                            subparagraphURL.style.backgroundColor = "#9efefe";
                                            setTimeout(function () { subparagraphURL.style.backgroundColor = "white"; }, 3000);

                                            subparagraphURL.style.borderRadius = "20px";
                                            subparagraphURL.style.padding = "0px";
                                            subparagraphURL.innerHTML = subparagraphURL.innerText;


                                            if (subparagraphURL.innerHTML === "") {
                                                alert('Input Content is Empty')
                                            }
                                            // editDoneBtn2.style.display = 'none';
                                            editbtnSub.disabled = false;
                                            if (subparagraphURL.innerHTML === "") {
                                                alert('Input Content is Empty')
                                            }
                                            let childUpdate = await axios({
                                                method: 'put',
                                                url: `${api}store/child/${childEditId}`,
                                                data: {

                                                    "permissionId": childEditId,
                                                    "permissionName": subparagraphURL.innerText,
                                                    "permissionDescription": inputParaDiv.innerText,
                                                    "permissionGroup": nodeName.innerText,
                                                    "permissionControl": "MENU",
                                                    "icon": "sub-icon",
                                                    "permissionLevel":inputParaDiv.innerText,
                                                    "rankData": childRantData
                                                }
                                            });

                                        }
                                    }


                                }
                                document.getElementById('editsub' + k).onclick = editSubChild;
                                document.getElementById('editUrl' + k).onclick = editSubChildURL;

                                subInputdel.onclick = removeSub;

                                function handleDragStart(e) {
                                    this.style.opacity = "0.4";

                                    dragSrcEl = this;

                                    e.dataTransfer.effectAllowed = "move";
                                    //e.dataTransfer.setData("text/html", this.innerHTML);
                                }

                                function handleDragEnd(e) {
                                    this.style.opacity = "1";
                                }

                                function handleDragEnd(e) {
                                    this.style.opacity = "1";

                                    items.forEach(function (item) {
                                        item.classList.remove("over");
                                    });
                                    dragSrcEl = undefined;
                                }

                                function handleDragOver(e) {
                                    if (e.preventDefault) {
                                        e.preventDefault();
                                    }

                                    return false;
                                }

                                function handleDragEnter(e) {
                                    this.classList.add("over");
                                }

                                function handleDragLeave(e) {
                                    this.classList.remove("over");
                                }

                                function handleDrop(e) {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    if (dragSrcEl !== this) {
                                        if (dropAction === "swap") {
                                            swapItems(dragSrcEl, this);
                                        } else {
                                            shiftItems(dragSrcEl, this);
                                        }
                                        dragSrcEl = undefined;
                                    }
                                    return false;
                                }

                                function swapItems(a, b) {
                                    const tmp = a.innerHTML;
                                    a.innerHTML = b.innerHTML;
                                    b.innerHTML = tmp;
                                }

                                function shiftItems(srcElem, destElem) {
                                    const items = Array.from(document.querySelectorAll(".item"));
                                    const srcIdx = items.indexOf(srcElem);
                                    const destIdx = items.indexOf(destElem);
                                    console.log(`srcIdx = ${srcIdx}, destIdx= ${destIdx}`);
                                    if (srcIdx < destIdx) {
                                        // moving down
                                        for (let i = srcIdx; i < destIdx - 1; i++) {
                                            console.log(`swapping ${i} and ${i + 1}`);
                                            swapItems(items[i], items[i + 1]);
                                        }
                                    } else {
                                        // moving up
                                        for (let i = srcIdx - 1; i >= destIdx; i--) {
                                            console.log(`swapping ${i} and ${i + 1}`);
                                            swapItems(items[i], items[i + 1]);
                                        }
                                    }
                                }

                                let dragSrcEl;
                                let dropAction = "shift";
                                const items = document.querySelectorAll(".item");
                                items.forEach(function (item) {
                                    item.addEventListener("dragstart", handleDragStart);
                                    item.addEventListener("dragover", handleDragOver);
                                    item.addEventListener("dragenter", handleDragEnter);
                                    item.addEventListener("dragleave", handleDragLeave);
                                    item.addEventListener("dragend", handleDragEnd);
                                    item.addEventListener("drop", handleDrop);
                                });
                                // document.querySelector("#dropaction").addEventListener("change", (e) => {
                                //     dropAction = e.target.value;
                                // });

                                k++



                            }

                            subInputbtn.onclick = getSubIpValue;


                        }


                        // btn1.disabled = true;

                        j++;
                    }

                    async function updatedValue() {
                        // console.log(id);

                        editbtn.disabled = true;

                        // if (paragraph.innerHTML == value) {
                        let idOfParent = firstApiResponse.data[0].payLoad[x].id;
                        let parentRankData = (firstApiResponse.data[0].payLoad[x].rankData);
                        let parentURL = firstApiResponse.data[0].payLoad[x].link

                        console.log(idOfParent);

                        paragraph.contentEditable = true;
                        paragraph.style.backgroundColor = "#ebebeb";
                        paragraph.style.color = "black";
                        paragraph.style.outline = "none";
                        paragraph.style.borderRadius = "10px";
                        paragraph.style.padding = "1px 10px";

                        let editDoneBtn = document.createElement('button')
                        div1.appendChild(editDoneBtn);
                        editDoneBtn.innerHTML = '<i class="ri-arrow-right-fill"></i>';
                        editDoneBtn.setAttribute('type', 'submit');
                        editDoneBtn.setAttribute('id', 'end-editing')



                        editDoneBtn.addEventListener("click", function () {
                            paragraph.contentEditable = false;
                            paragraph.style.backgroundColor = "#b6ff46";
                            setTimeout(function () { paragraph.style.backgroundColor = "white"; }, 3000);

                            paragraph.style.borderRadius = "20px";
                            paragraph.style.padding = "0px";

                            editDoneBtn.style.display = 'none';
                            editbtn.disabled = false;
                            editbtn.disabled = false;

                            // console.log(paragraph.innerHTML);

                            let parentUpdate = axios({
                                method: 'put',
                                url: `${api}store/parent/${idOfParent}`,
                                data: {

                                    "permissionId": idOfParent,
                                    "permissionName": parentURL,
                                    "permissionDescription": paragraph.innerHTML,
                                    "permissionGroup": "Root",
                                    "permissionControl": "MENU",
                                    // "icon": "sub-icon",
                                    "permissionLevel": paragraph.innerHTML,
                                    "rankData": parentRankData,


                                }
                            });
                            // console.log(parentUpdate.data);

                        })

                        paragraph.onkeydown = async function (event) {

                            if (event.key === "Enter") {
                                editDoneBtn.style.display = 'none'
                                paragraph.contentEditable = false;
                                paragraph.style.backgroundColor = "#b6ff46";
                                setTimeout(function () { paragraph.style.backgroundColor = "white"; }, 3000);

                                paragraph.style.borderRadius = "20px";
                                paragraph.style.padding = "0px";

                                // editDoneBtn.style.display = 'none';
                                // editbtn.disabled = false;
                                // editbtn.disabled = false;

                                // console.log(paragraph.innerHTML);

                                let parentUpdate = await axios({
                                    method: 'put',
                                    url: `${api}store/parent/${idOfParent}`,
                                    data: {

                                        "permissionId": idOfParent,
                                        "permissionName": parentURL,
                                        "permissionDescription": paragraph.innerHTML,
                                        "permissionGroup": "Root",
                                        "permissionControl": "MENU",
                                        // "icon": "sub-icon",
                                        "permissionLevel": paragraph.innerHTML,
                                        "rankData": parentRankData,
                                    }
                                });
                                // console.log(parentUpdate.data);

                            }
                        }


                    }



                    document.getElementById('edit' + i).onclick = updatedValue;

                    document.getElementById('add' + i).onclick = subMainDiv;
                    // document.getElementById('mainAddBtn').onclick = addNode;

                    btn2.onclick = remove;
                    i++;


                }

            }

        }

    } catch (err) {
        // Handle Error Here

        console.error(err);
    }


}
async function addNode() {
    // for (let x = 0; x < len; x++) {
    let payload = {
        "permissionName": "Link",
        "permissionDescription": "Store Users Management",
        "permissionGroup": "Users",
        "permissionControl": "MENU",
        "icon": "sub-icon",
        "permissionLevel": "Store Users Management",
        "rankData": "19"
    };


    // console.log(manualApiRes);



    // initialValue();


    let item = document.getElementById('usr');
    let itemValue = item.value;
    listArray.push(itemValue);
    // console.log(listArray);
    let additem = document.getElementById('list')
    let li = document.createElement('li');
    li.setAttribute('class', 'addeditmes animate__animated animate__backInDown nav-item');
    li.setAttribute('id', 'list' + i);
    additem.appendChild(li);

    let anchor = document.createElement('a');
    anchor.setAttribute('class', 'anchorstyle nav-link active')
    anchor.setAttribute('data-toggle', 'tab')
    anchor.setAttribute('href', '#subdiv');
    li.appendChild(anchor);


    let div1 = document.createElement('div');
    div1.setAttribute('class', 'textcolor animate__animated animate__fadeInDown');

    let editbtn = document.createElement('button')
    div1.appendChild(editbtn);
    editbtn.setAttribute('id', 'edit' + i)
    editbtn.innerHTML = "<i class='ri-pencil-fill'></i>";
    let menupara = document.createElement('p')
    menupara.setAttribute('id', 'menuName' + i)
    div1.appendChild(menupara);
    menupara.innerText = itemValue;
    // menupara.innerText = value;



    let div2 = document.createElement('div');
    div2.setAttribute('class', 'addminus')


    let btn1 = document.createElement('button');
    btn1.setAttribute('class', 'btn ')
    btn1.setAttribute('id', 'add' + i);
    btn1.innerHTML = "<i class='ri-add-circle-fill'></i>"

    let btn2 = document.createElement('button');
    btn2.setAttribute('class', 'btn');
    btn2.setAttribute('id', 'delete' + i);
    btn2.innerHTML = "<i class='ri-delete-bin-fill'></i>"

    div2.appendChild(btn1)
    div2.appendChild(btn2)


    anchor.appendChild(div1)
    anchor.appendChild(div2)

    const paragraph = document.getElementById('menuName' + i);

    let remove = async function () {

        let ParentValue = paragraph.innerText;
        // console.log(ParentValue);
        let posOfParent = 0;
        for (let x = 0; x < parentLen; x++) {
            parentName = firstApiResponse.data[0].payLoad[x].module;
            if (ParentValue == parentName) {
                posOfParent = x;
            }
        }
        let delIdOfParent = firstApiResponse.data[0].payLoad[posOfParent].id;

        this.parentNode.parentNode.parentNode.remove();
        await axios.delete(`${api}store/parent/${delIdOfParent}`, payload, config);

    };



    let test = await axios({
        method: 'post',
        url: `${api}store/parent`,
        data: {

            "permissionName": "Link",
            "permissionDescription": itemValue,
            "permissionGroup": "Root",
            "permissionControl": "Group",
            "icon": "store-front",
            "permissionLevel": itemValue,
            "rankData": rankDataParent++,
        }
    });
    firstApiResponse = await axios.get(`${api}store/getParentChild`, payload, config);
    let parentLen = firstApiResponse.data[0].payLoad.length;
    console.log(parentLen);
    console.log(firstApiResponse);

    // console.log(test);

    // payloadReal['permissionDescription'] = itemValue;

    async function subMainDiv() {
        firstApiResponse = await axios.get(`${api}store/getParentChild`, payload, config);
        // console.log(firstApiResponse.data)
        // // let value = (firstApiResponse1.data[0].payLoad[x].module);

        let z = document.getElementById('childs')
        if (z.innerHTML === '') {
            // console.log('pl')

            let sub = document.createElement('div');
            sub.setAttribute('id', 'subdiv');
            sub.setAttribute('class', 'subchildstyle  tab-pane active');
            z.appendChild(sub);


            let subInputDiv = document.createElement('div');
            subInputDiv.setAttribute('id', 'subhead' + j);
            subInputDiv.setAttribute('class', 'subhead')
            sub.appendChild(subInputDiv)

            var nodeName = document.createElement('p');
            subInputDiv.appendChild(nodeName)
            nodeName.setAttribute('class', 'nodeName animate__animated animate__backInLeft')
            nodeName.innerText = menupara.innerText;


            let ipOuterdiv = document.createElement('div')
            subInputDiv.appendChild(ipOuterdiv)
            ipOuterdiv.setAttribute('class', 'ipoutdiv')


            let subInput = document.createElement('input');
            ipOuterdiv.appendChild(subInput)
            subInput.setAttribute('id', 'subInput' + j);
            subInput.setAttribute('class', 'subInput');

            let subInputbtn = document.createElement('button')
            ipOuterdiv.appendChild(subInputbtn)
            subInputbtn.innerText = 'AddChild'
            subInputbtn.setAttribute('id', 'addsubip' + j)
            subInputbtn.setAttribute('class', 'addsubip')


            let a = document.createElement('div')
            a.setAttribute('id', 'subInputBox')
            a.setAttribute('class', 'tab-content')

            sub.appendChild(a)

            let manualChildLength = 0;
            let parentIndex = 0;
            for (let x = 0; x < parentLen; x++) {
                let ParentName = (firstApiResponse.data[0].payLoad[x].module);
                if (nodeName.innerText == ParentName) {
                    parentIndex = x;
                    manualChildLength = firstApiResponse.data[0].payLoad[x].menus.length

                }
            }
            // console.log(parentIndex);
            // console.log(manualChildLength);
            // for (let s = 0; s<manualChildLength; s++) {
            //     let manualIpChildName = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.subMenuName
            //     console.log(manualIpChildName);
            // }



            if (a.innerHTML == '') {


                for (let s = 0; s < manualChildLength; s++) {
                    let manualIpChildName = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.subMenuName
                    let manualIpChildURL = `${firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.link}`
                    // console.log(manualIpChildName);

                    // let subInputValue = subInput.value;
                    let b = document.createElement('div')
                    b.setAttribute('class', 'subinputboxes tab-pane active item')
                    b.setAttribute('id', 'menu' + k)
                    b.setAttribute('draggable', 'true')

                    a.appendChild(b);

                    let inputTextDiv = document.createElement('div');
                    inputTextDiv.setAttribute('id', 'inputText' + k);
                    inputTextDiv.setAttribute('class', 'inputText');
                    // inputTextDiv.setAttribute('draggable', 'true')

                    b.appendChild(inputTextDiv);

                    let paraAndEditDiv = document.createElement('div')
                    inputTextDiv.appendChild(paraAndEditDiv);
                    paraAndEditDiv.setAttribute('class', 'paraAndEdit')


                    let editbtnSub = document.createElement('button')
                    paraAndEditDiv.appendChild(editbtnSub)
                    editbtnSub.setAttribute('id', 'editsub' + k)
                    editbtnSub.setAttribute('class', 'editsub')
                    editbtnSub.innerHTML = "<i class='ri-pencil-fill'></i>";

                    let inputParaDiv = document.createElement('p');
                    paraAndEditDiv.appendChild(inputParaDiv);
                    inputParaDiv.setAttribute('class', 'inputParaDiv animate__animated animate__backInDown')
                    inputParaDiv.setAttribute('id', 'inputParaDiv' + k)

                    // inputTextDiv.appendChild(inputParaDiv);
                    // inputParaDiv.innerHTML = "<i class='ri-check-double-line'></i>" + subInputValue;
                    inputParaDiv.innerHTML = "<i class='ri-check-double-line'></i>" + manualIpChildName;


                    let urlDiv = document.createElement('div')
                    inputTextDiv.appendChild(urlDiv)
                    urlDiv.setAttribute('class', 'URL')

                    let editUrlBtn = document.createElement('button')
                    urlDiv.appendChild(editUrlBtn)
                    editUrlBtn.setAttribute('class', 'editUrl')
                    editUrlBtn.setAttribute('id', 'editUrl' + k)
                    editUrlBtn.innerHTML = "<i class='ri-pencil-fill'></i>"

                    let urlPara = document.createElement('p')
                    urlDiv.appendChild(urlPara)
                    urlPara.setAttribute('class', 'URLpara')
                    urlPara.setAttribute('class', 'URLpara' + k)
                    urlPara.innerText = manualIpChildURL


                    let div3 = document.createElement('div')
                    div3.setAttribute('class', 'childEditDel')

                    let subInputdel = document.createElement('button')
                    subInputdel.setAttribute('id', 'ipDelBtn' + k)
                    subInputdel.setAttribute('class', 'ipDelBtn')



                    div3.appendChild(subInputdel);
                    inputTextDiv.appendChild(div3);
                    subInputdel.innerHTML = "<i class='ri-delete-bin-fill'></i>";

                    // sub.appendChild(inputTextDiv);



                    let removeSub = async function () {
                        // console.log('hi')
                        this.parentNode.parentNode.parentNode.remove();
                        let delIdOfChild = firstApiResponse1.data[0].payLoad[parentIndex].menus[s].subMenu.id;


                        await axios.delete(`${api}store/child/${delIdOfChild}`, payload, config);

                    };
                    let subparagraph = document.getElementById('inputParaDiv' + k)
                    let subparagraphURL = document.getElementById('URLpara' + k)

                    async function editSubChild() {
                        firstApiResponse = await axios.get(`${api}store/getParentChild`, payload, config);

                        console.log(firstApiResponse);

                        let childRantData = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.rankData

                        let childEditId = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.id;
                        let childEditURL = `${firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.link}`


                        editbtnSub.disabled = true;

                        subparagraph.contentEditable = true;
                        subparagraph.style.backgroundColor = "#ebebeb";
                        subparagraph.style.color = "black";
                        subparagraph.style.outline = "none";
                        subparagraph.style.borderRadius = "10px";
                        subparagraph.style.padding = "1px 10px";
                        subparagraph.innerHTML = subparagraph.innerText

                        let editDoneBtn = document.createElement('button')
                        paraAndEditDiv.appendChild(editDoneBtn);
                        editDoneBtn.innerHTML = '<i class="ri-arrow-right-fill"></i>';
                        editDoneBtn.setAttribute('type', 'submit');
                        editDoneBtn.setAttribute('id', 'end-editing')


                        editDoneBtn.addEventListener("click", async function () {
                            subparagraph.contentEditable = false;
                            subparagraph.innerHTML = "<i class='ri-check-double-line'></i>" + subparagraph.innerText;
                            subparagraph.style.backgroundColor = "#ebebeb";
                            setTimeout(function () { subparagraph.style.backgroundColor = "white"; }, 3000);

                            subparagraph.style.borderRadius = "20px";
                            subparagraph.style.padding = "0px";

                            editDoneBtn.style.display = 'none';
                            editbtnSub.disabled = false;


                            if (subparagraph.innerHTML === "") {
                                alert('Input Content is Empty')
                            }
                            // console.log(paragraph.innerHTML);

                            let childUpdate = await axios({
                                method: 'put',
                                url: `${api}store/child/${childEditId}`,
                                data: {

                                    "permissionId": childEditId,
                                    "permissionName": childEditURL,
                                    "permissionDescription": subparagraph.innerText,
                                    "permissionGroup": nodeName.innerText,
                                    "permissionControl": "MENU",
                                    "icon": "sub-icon",
                                    "permissionLevel":  subparagraph.innerText,
                                    "rankData": childRantData
                                }
                            });
                            // console.log(parentUpdate.data);

                        })


                        subparagraph.onkeydown = async function (event) {
                            if (event.key === "Enter") {
                                subparagraph.contentEditable = false;
                                editDoneBtn.style.display = 'none'

                                subparagraph.style.backgroundColor = "#9efefe";
                                setTimeout(function () { subparagraph.style.backgroundColor = "white"; }, 3000);

                                subparagraph.style.borderRadius = "20px";
                                subparagraph.style.padding = "0px";
                                subparagraph.innerHTML = "<i class='ri-check-double-line'></i>" + subparagraph.innerText;



                                // editDoneBtn2.style.display = 'none';
                                editbtnSub.disabled = false;
                                if (subparagraph.innerHTML === "") {
                                    alert('Input Content is Empty')
                                }
                                let childUpdate = await axios({
                                    method: 'put',
                                    url: `${api}store/child/${childEditId}`,
                                    data: {

                                        "permissionId": childEditId,
                                        "permissionName": childEditURL,
                                        "permissionDescription": subparagraph.innerText,
                                        "permissionGroup": nodeName.innerText,
                                        "permissionControl": "MENU",
                                        "icon": "sub-icon",
                                        "permissionLevel": subparagraph.innerText,
                                        "rankData": childRantData
                                    }
                                });

                            }
                        }


                    }
                    async function editSubChildURL() {
                        firstApiResponse = await axios.get(`${api}store/getParentChild`, payload, config);


                        // console.log(subparagraphURL);
                        // let childid=editbtnSub.id;
                        let childRantData = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.rankData

                        let childEditId = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.id;
                        // console.log(childEditId);


                        editbtnSub.disabled = true;

                        subparagraphURL.contentEditable = true;
                        subparagraphURL.style.backgroundColor = "#ebebeb";
                        subparagraphURL.style.color = "black";
                        subparagraphURL.style.outline = "none";
                        subparagraphURL.style.borderRadius = "10px";
                        subparagraphURL.style.padding = "1px 10px";
                        subparagraphURL.innerHTML = subparagraphURL.innerText

                        let editDoneBtn = document.createElement('button')
                        urlDiv.appendChild(editDoneBtn);
                        editDoneBtn.innerHTML = '<i class="ri-arrow-right-fill"></i>';
                        editDoneBtn.setAttribute('type', 'submit');
                        editDoneBtn.setAttribute('id', 'end-editing')


                        editDoneBtn.addEventListener("click", async function () {
                            subparagraphURL.contentEditable = false;
                            subparagraphURL.innerHTML = subparagraphURL.innerText;
                            subparagraphURL.style.backgroundColor = "#ebebeb";
                            setTimeout(function () { subparagraphURL.style.backgroundColor = "white"; }, 3000);

                            subparagraphURL.style.borderRadius = "20px";
                            subparagraphURL.style.padding = "0px";

                            editDoneBtn.style.display = 'none';
                            editbtnSub.disabled = false;


                            if (subparagraphURL.innerHTML === "") {
                                alert('Input Content is Empty')
                            }
                            // console.log(paragraph.innerHTML);

                            let childUpdate = await axios({
                                method: 'put',
                                url: `${api}store/child/${childEditId}`,
                                data: {

                                    "permissionId": childEditId,
                                    "permissionName": subparagraphURL.innerText,
                                    "permissionDescription": inputParaDiv.innerText,
                                    "permissionGroup": nodeName.innerText,
                                    "permissionControl": "MENU",
                                    "icon": "sub-icon",
                                    "permissionLevel": inputParaDiv.innerText,
                                    "rankData": childRantData
                                }
                            });
                            // console.log(parentUpdate.data);

                        })


                        subparagraphURL.onkeydown = async function (event) {
                            if (event.key === "Enter") {
                                subparagraphURL.contentEditable = false;
                                editDoneBtn.style.display = 'none'

                                subparagraphURL.style.backgroundColor = "#9efefe";
                                setTimeout(function () { subparagraphURL.style.backgroundColor = "white"; }, 3000);

                                subparagraphURL.style.borderRadius = "20px";
                                subparagraphURL.style.padding = "0px";
                                subparagraphURL.innerHTML = subparagraphURL.innerText;


                                if (subparagraphURL.innerHTML === "") {
                                    alert('Input Content is Empty')
                                }
                                // editDoneBtn2.style.display = 'none';
                                editbtnSub.disabled = false;
                                if (subparagraphURL.innerHTML === "") {
                                    alert('Input Content is Empty')
                                }
                                let childUpdate = await axios({
                                    method: 'put',
                                    url: `${api}store/child/${childEditId}`,
                                    data: {

                                        "permissionId": childEditId,
                                        "permissionName": subparagraphURL.innerText,
                                        "permissionDescription": inputParaDiv.innerText,
                                        "permissionGroup": nodeName.innerText,
                                        "permissionControl": "MENU",
                                        "icon": "sub-icon",
                                        "permissionLevel": inputParaDiv.innerText,
                                        "rankData": childRantData
                                    }
                                });

                            }
                        }


                    }
                    document.getElementById('editsub' + k).onclick = editSubChild;
                    document.getElementById('editUrl' + k).onclick = editSubChildURL;

                    subInputdel.onclick = removeSub;

                    k++

                }

                function handleDragStart(e) {
                    this.style.opacity = "0.4";

                    dragSrcEl = this;

                    e.dataTransfer.effectAllowed = "move";
                    //e.dataTransfer.setData("text/html", this.innerHTML);
                }

                function handleDragEnd(e) {
                    this.style.opacity = "1";
                }

                function handleDragEnd(e) {
                    this.style.opacity = "1";

                    items.forEach(function (item) {
                        item.classList.remove("over");
                    });
                    dragSrcEl = undefined;
                }

                function handleDragOver(e) {
                    if (e.preventDefault) {
                        e.preventDefault();
                    }

                    return false;
                }

                function handleDragEnter(e) {
                    this.classList.add("over");
                }

                function handleDragLeave(e) {
                    this.classList.remove("over");
                }

                function handleDrop(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    if (dragSrcEl !== this) {
                        if (dropAction === "swap") {
                            swapItems(dragSrcEl, this);
                        } else {
                            shiftItems(dragSrcEl, this);
                        }
                        dragSrcEl = undefined;
                    }
                    return false;
                }

                function swapItems(a, b) {
                    const tmp = a.innerHTML;
                    a.innerHTML = b.innerHTML;
                    b.innerHTML = tmp;
                }

                function shiftItems(srcElem, destElem) {
                    const items = Array.from(document.querySelectorAll(".item"));
                    const srcIdx = items.indexOf(srcElem);
                    const destIdx = items.indexOf(destElem);
                    console.log(`srcIdx = ${srcIdx}, destIdx= ${destIdx}`);
                    if (srcIdx < destIdx) {
                        // moving down
                        for (let i = srcIdx; i < destIdx - 1; i++) {
                            console.log(`swapping ${i} and ${i + 1}`);
                            swapItems(items[i], items[i + 1]);
                        }
                    } else {
                        // moving up
                        for (let i = srcIdx - 1; i >= destIdx; i--) {
                            console.log(`swapping ${i} and ${i + 1}`);
                            swapItems(items[i], items[i + 1]);
                        }
                    }
                }

                let dragSrcEl;
                let dropAction = "shift";
                const items = document.querySelectorAll(".item");
                items.forEach(function (item) {
                    item.addEventListener("dragstart", handleDragStart);
                    item.addEventListener("dragover", handleDragOver);
                    item.addEventListener("dragenter", handleDragEnter);
                    item.addEventListener("dragleave", handleDragLeave);
                    item.addEventListener("dragend", handleDragEnd);
                    item.addEventListener("drop", handleDrop);
                });
                // document.querySelector("#dropaction").addEventListener("change", (e) => {
                //     dropAction = e.target.value;
                // });

            }
            async function getSubIpValue() {
                firstApiResponse = await axios.get(`${api}store/getParentChild`, payload, config);



                let subInputValue = subInput.value;
                let b = document.createElement('div')
                b.setAttribute('class', 'subinputboxes tab-pane active item')
                b.setAttribute('id', 'menu' + k)
                b.setAttribute('draggable', 'true')

                a.appendChild(b);

                let inputTextDiv = document.createElement('div');
                inputTextDiv.setAttribute('id', 'inputText' + k);
                inputTextDiv.setAttribute('class', 'inputText');
                // inputTextDiv.setAttribute('draggable', 'true')

                b.appendChild(inputTextDiv);

                let paraAndEditDiv = document.createElement('div')
                inputTextDiv.appendChild(paraAndEditDiv);
                paraAndEditDiv.setAttribute('class', 'paraAndEdit')


                let editbtnSub = document.createElement('button')
                paraAndEditDiv.appendChild(editbtnSub)
                editbtnSub.setAttribute('id', 'editsub' + k)
                editbtnSub.setAttribute('class', 'editsub')
                editbtnSub.innerHTML = "<i class='ri-pencil-fill'></i>";

                let inputParaDiv = document.createElement('p');
                paraAndEditDiv.appendChild(inputParaDiv);
                inputParaDiv.setAttribute('class', 'inputParaDiv animate__animated animate__backInDown')
                inputParaDiv.setAttribute('id', 'inputParaDiv' + k)
                inputParaDiv.innerHTML = "<i class='ri-check-double-line'></i>" + subInputValue;

                let urlDiv = document.createElement('div')
                inputTextDiv.appendChild(urlDiv)
                urlDiv.setAttribute('class', 'URL')

                let editUrlBtn = document.createElement('button')
                urlDiv.appendChild(editUrlBtn)
                editUrlBtn.setAttribute('class', 'editUrl')
                editUrlBtn.setAttribute('id', 'editUrl' + k)
                editUrlBtn.innerHTML = "<i class='ri-pencil-fill'></i>"

                let urlPara = document.createElement('p')
                urlDiv.appendChild(urlPara)
                urlPara.setAttribute('class', 'URLpara')
                urlPara.setAttribute('id', 'URLpara' + k)
                urlPara.innerText = 'Edit Url here'


                let div3 = document.createElement('div')
                div3.setAttribute('class', 'childEditDel')


                let subInputdel = document.createElement('button')
                subInputdel.setAttribute('id', 'ipDelBtn' + k)
                subInputdel.setAttribute('class', 'ipDelBtn')



                // div3.appendChild(editbtnSub);

                div3.appendChild(subInputdel);
                inputTextDiv.appendChild(div3);
                subInputdel.innerHTML = "<i class='ri-delete-bin-fill'></i>";

                let subparagraph = document.getElementById('inputParaDiv' + k)
                let subparagraphURL = document.getElementById('URLpara' + k)

                await axios({
                    method: 'post',
                    url: `${api}store/child`,
                    data: {

                        "permissionName": urlPara.innerText,
                        "permissionDescription": subInputValue,
                        "permissionGroup": nodeName.innerText,
                        "permissionControl": "MENU",
                        "icon": "sub-icon",
                        "permissionLevel": subInputValue,
                        "rankData": rankDataChild++,
                    }
                });


                firstApiResponse = await axios.get(`${api}store/getParentChild`, payload, config);
                // let parentLen = firstApiResponse.data[0].payLoad.length;
                // console.log(parentLen);
                console.log(firstApiResponse);


                let removeSub = async function () {

                    this.parentNode.parentNode.parentNode.remove();
                    ChildName = subparagraph.innerText;
                    let childEditLen = firstApiResponse1.data[0].payLoad[parentIndex].menus.length;
                    // console.log(ChildName)
                    // console.log(childEditLen)
                    let delIdOfChild = 0;
                    let childRantData = 0;
                    for (let s = 0; s < childEditLen; s++) {
                        let childEditName = firstApiResponse1.data[0].payLoad[parentIndex].menus[s].subMenu.subMenuName

                        if (childEditName == ChildName) {
                            childRantData = firstApiResponse1.data[0].payLoad[parentIndex].menus[s].subMenu.rankData
                            delIdOfChild = firstApiResponse1.data[0].payLoad[parentIndex].menus[s].subMenu.id;


                        }
                    }
                    await axios.delete(`${api}store/child/${delIdOfChild}`, payload, config);

                };

                async function editSubChild() {
                    firstApiResponse = await axios.get(`${api}store/getParentChild`, payload, config);


                    console.log(firstApiResponse);

                    ChildName = subparagraph.innerText;
                    let childEditLen = firstApiResponse.data[0].payLoad[parentIndex].menus.length;
                    // console.log(ChildName)
                    // console.log(childEditLen)
                    let childEditId = 0;
                    let childRantData = 0;
                    let childEditURL = '';
                    for (let s = 0; s < childEditLen; s++) {
                        let childEditName = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.subMenuName

                        if (childEditName == ChildName) {
                            childRantData = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.rankData
                            childEditId = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.id
                            childEditURL = `${firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.link}`

                        }
                    }
                    // for(let x=0;x<)
                    editbtnSub.disabled = true;

                    subparagraph.contentEditable = true;
                    subparagraph.style.backgroundColor = "#ebebeb";
                    subparagraph.style.color = "black";
                    subparagraph.style.outline = "none";
                    subparagraph.style.borderRadius = "10px";
                    subparagraph.style.padding = "1px 10px";
                    subparagraph.innerHTML = subparagraph.innerText

                    let editDoneBtn = document.createElement('button')
                    paraAndEditDiv.appendChild(editDoneBtn);
                    editDoneBtn.innerHTML = '<i class="ri-arrow-right-fill"></i>';
                    editDoneBtn.setAttribute('type', 'submit');
                    editDoneBtn.setAttribute('id', 'end-editing')


                    editDoneBtn.addEventListener("click", async function () {
                        subparagraph.contentEditable = false;
                        subparagraph.innerHTML = "<i class='ri-check-double-line'></i>" + subparagraph.innerText;
                        subparagraph.style.backgroundColor = "#ebebeb";
                        setTimeout(function () { subparagraph.style.backgroundColor = "white"; }, 3000);

                        subparagraph.style.borderRadius = "20px";
                        subparagraph.style.padding = "0px";

                        editDoneBtn.style.display = 'none';
                        editbtnSub.disabled = false;


                        if (subparagraph.innerHTML === "") {
                            alert('Input Content is Empty')
                        }
                        // console.log(paragraph.innerHTML);

                        let childUpdate = await axios({
                            method: 'put',
                            url: `${api}store/child/${childEditId}`,
                            data: {

                                "permissionId": childEditId,
                                "permissionName": childEditURL,
                                "permissionDescription": subparagraph.innerText,
                                "permissionGroup": nodeName.innerText,
                                "permissionControl": "MENU",
                                "icon": "sub-icon",
                                "permissionLevel": subparagraph.innerText,
                                "rankData": childRantData
                            }
                        });
                        // console.log(parentUpdate.data);

                    })


                    subparagraph.onkeydown = async function (event) {
                        if (event.key === "Enter") {
                            subparagraph.contentEditable = false;
                            editDoneBtn.style.display = 'none'

                            subparagraph.style.backgroundColor = "#9efefe";
                            setTimeout(function () { subparagraph.style.backgroundColor = "white"; }, 3000);

                            subparagraph.style.borderRadius = "20px";
                            subparagraph.style.padding = "0px";
                            subparagraph.innerHTML = "<i class='ri-check-double-line'></i>" + subparagraph.innerText;



                            // editDoneBtn2.style.display = 'none';
                            editbtnSub.disabled = false;
                            if (subparagraph.innerHTML === "") {
                                alert('Input Content is Empty')
                            }
                            let childUpdate = await axios({
                                method: 'put',
                                url: `${api}store/child/${childEditId}`,
                                data: {

                                    "permissionId": childEditId,
                                    "permissionName": childEditURL,
                                    "permissionDescription": subparagraph.innerText,
                                    "permissionGroup": nodeName.innerText,
                                    "permissionControl": "MENU",
                                    "icon": "sub-icon",
                                    "permissionLevel": subparagraph.innerText,
                                    "rankData": childRantData
                                }
                            });

                        }
                    }


                }
                async function editSubChildURL() {
                    firstApiResponse = await axios.get(`${api}store/getParentChild`, payload, config);


                    ChildName = subparagraph.innerText;
                    let childEditLen = firstApiResponse.data[0].payLoad[parentIndex].menus.length;
                    // console.log(ChildName)
                    // console.log(childEditLen)
                    let childEditId = 0;
                    let childRantData = 0;
                    for (let s = 0; s < childEditLen; s++) {
                        let childEditName = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.subMenuName

                        if (childEditName == ChildName) {
                            childRantData = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.rankData
                            childEditId = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.id


                        }
                    }


                    editbtnSub.disabled = true;

                    subparagraphURL.contentEditable = true;
                    subparagraphURL.style.backgroundColor = "#ebebeb";
                    subparagraphURL.style.color = "black";
                    subparagraphURL.style.outline = "none";
                    subparagraphURL.style.borderRadius = "10px";
                    subparagraphURL.style.padding = "1px 10px";
                    subparagraphURL.innerHTML = subparagraphURL.innerText

                    let editDoneBtn = document.createElement('button')
                    urlDiv.appendChild(editDoneBtn);
                    editDoneBtn.innerHTML = '<i class="ri-arrow-right-fill"></i>';
                    editDoneBtn.setAttribute('type', 'submit');
                    editDoneBtn.setAttribute('id', 'end-editing')


                    editDoneBtn.addEventListener("click", async function () {
                        subparagraphURL.contentEditable = false;
                        subparagraphURL.innerHTML = subparagraphURL.innerText;
                        subparagraphURL.style.backgroundColor = "#ebebeb";
                        setTimeout(function () { subparagraphURL.style.backgroundColor = "white"; }, 3000);

                        subparagraphURL.style.borderRadius = "20px";
                        subparagraphURL.style.padding = "0px";

                        editDoneBtn.style.display = 'none';
                        editbtnSub.disabled = false;


                        if (subparagraphURL.innerHTML === "") {
                            alert('Input Content is Empty')
                        }
                        // console.log(paragraph.innerHTML);

                        let childUpdate = await axios({
                            method: 'put',
                            url: `${api}store/child/${childEditId}`,
                            data: {

                                "permissionId": childEditId,
                                "permissionName": subparagraphURL.innerText,
                                "permissionDescription": inputParaDiv.innerText,
                                "permissionGroup": nodeName.innerText,
                                "permissionControl": "MENU",
                                "icon": "sub-icon",
                                "permissionLevel": inputParaDiv.innerText,
                                "rankData": childRantData
                            }
                        });
                        // console.log(parentUpdate.data);

                    })


                    subparagraphURL.onkeydown = async function (event) {
                        if (event.key === "Enter") {
                            subparagraphURL.contentEditable = false;
                            editDoneBtn.style.display = 'none'

                            subparagraphURL.style.backgroundColor = "#9efefe";
                            setTimeout(function () { subparagraphURL.style.backgroundColor = "white"; }, 3000);

                            subparagraphURL.style.borderRadius = "20px";
                            subparagraphURL.style.padding = "0px";
                            subparagraphURL.innerHTML = subparagraphURL.innerText;


                            if (subparagraphURL.innerHTML === "") {
                                alert('Input Content is Empty')
                            }
                            // editDoneBtn2.style.display = 'none';
                            editbtnSub.disabled = false;
                            if (subparagraphURL.innerHTML === "") {
                                alert('Input Content is Empty')
                            }
                            let childUpdate = await axios({
                                method: 'put',
                                url: `${api}store/child/${childEditId}`,
                                data: {

                                    "permissionId": childEditId,
                                    "permissionName": subparagraphURL.innerText,
                                    "permissionDescription": inputParaDiv.innerText,
                                    "permissionGroup": nodeName.innerText,
                                    "permissionControl": "MENU",
                                    "icon": "sub-icon",
                                    "permissionLevel": inputParaDiv.innerText,
                                    "rankData": childRantData
                                }
                            });

                        }
                    }


                }
                editbtnSub.onclick = editSubChild;
                document.getElementById('editUrl' + k).onclick = editSubChildURL;

                subInputdel.onclick = removeSub;

                function handleDragStart(e) {
                    this.style.opacity = "0.4";

                    dragSrcEl = this;

                    e.dataTransfer.effectAllowed = "move";
                    //e.dataTransfer.setData("text/html", this.innerHTML);
                }

                function handleDragEnd(e) {
                    this.style.opacity = "1";
                }

                function handleDragEnd(e) {
                    this.style.opacity = "1";

                    items.forEach(function (item) {
                        item.classList.remove("over");
                    });
                    dragSrcEl = undefined;
                }

                function handleDragOver(e) {
                    if (e.preventDefault) {
                        e.preventDefault();
                    }

                    return false;
                }

                function handleDragEnter(e) {
                    this.classList.add("over");
                }

                function handleDragLeave(e) {
                    this.classList.remove("over");
                }

                function handleDrop(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    if (dragSrcEl !== this) {
                        if (dropAction === "swap") {
                            swapItems(dragSrcEl, this);
                        } else {
                            shiftItems(dragSrcEl, this);
                        }
                        dragSrcEl = undefined;
                    }
                    return false;
                }

                function swapItems(a, b) {
                    const tmp = a.innerHTML;
                    a.innerHTML = b.innerHTML;
                    b.innerHTML = tmp;
                }

                function shiftItems(srcElem, destElem) {
                    const items = Array.from(document.querySelectorAll(".item"));
                    const srcIdx = items.indexOf(srcElem);
                    const destIdx = items.indexOf(destElem);
                    console.log(`srcIdx = ${srcIdx}, destIdx= ${destIdx}`);
                    if (srcIdx < destIdx) {
                        // moving down
                        for (let i = srcIdx; i < destIdx - 1; i++) {
                            console.log(`swapping ${i} and ${i + 1}`);
                            swapItems(items[i], items[i + 1]);
                        }
                    } else {
                        // moving up
                        for (let i = srcIdx - 1; i >= destIdx; i--) {
                            console.log(`swapping ${i} and ${i + 1}`);
                            swapItems(items[i], items[i + 1]);
                        }
                    }
                }

                let dragSrcEl;
                let dropAction = "shift";
                const items = document.querySelectorAll(".item");
                items.forEach(function (item) {
                    item.addEventListener("dragstart", handleDragStart);
                    item.addEventListener("dragover", handleDragOver);
                    item.addEventListener("dragenter", handleDragEnter);
                    item.addEventListener("dragleave", handleDragLeave);
                    item.addEventListener("dragend", handleDragEnd);
                    item.addEventListener("drop", handleDrop);
                });
                // document.querySelector("#dropaction").addEventListener("change", (e) => {
                //     dropAction = e.target.value;
                // });

                k++


            }
            subInputbtn.onclick = getSubIpValue;
        }
        else {

            // firstApiResponse = await axios.get(`${api}store/getParentChild`, payload, config);
            // let parentLen = firstApiResponse.data[0].payLoad.length;
            firstApiResponse = await axios.get(`${api}store/getParentChild`, payload, config);




            let sub1 = document.createElement('div');
            sub1.setAttribute('id', 'subdiv');
            sub1.setAttribute('class', 'subchildstyle  tab-pane active');


            let subInputDiv = document.createElement('div');
            subInputDiv.setAttribute('id', 'subhead' + j);
            subInputDiv.setAttribute('class', 'subhead')
            sub1.appendChild(subInputDiv)

            let nodeName = document.createElement('p');
            subInputDiv.appendChild(nodeName)
            nodeName.setAttribute('class', 'nodeName animate__animated animate__backInLeft')
            nodeName.innerText = menupara.innerText;


            let ipOuterdiv = document.createElement('div')
            subInputDiv.appendChild(ipOuterdiv)
            ipOuterdiv.setAttribute('class', 'ipoutdiv')


            let subInput = document.createElement('input');
            ipOuterdiv.appendChild(subInput)
            subInput.setAttribute('id', 'subInput' + j);
            subInput.setAttribute('class', 'subInput');


            let subInputbtn = document.createElement('button')
            ipOuterdiv.appendChild(subInputbtn)
            subInputbtn.innerText = 'AddChild'
            subInputbtn.setAttribute('id', 'addsubip' + j)
            subInputbtn.setAttribute('class', 'addsubip')


            let a = document.createElement('div')
            a.setAttribute('id', 'subInputBox')
            a.setAttribute('class', 'tab-content')

            sub1.appendChild(a)
            var sp2 = document.getElementById("subdiv");
            z.replaceChild(sub1, sp2);

            let manualChildLength = 0;
            let parentIndex = 0;
            for (let x = 0; x < parentLen; x++) {
                let ParentName = (firstApiResponse.data[0].payLoad[x].module);
                if (nodeName.innerText == ParentName) {
                    parentIndex = x;
                    manualChildLength = firstApiResponse.data[0].payLoad[x].menus.length

                }
            }
            // console.log(parentIndex);
            // console.log(manualChildLength);
            // for (let s = 0; s<manualChildLength; s++) {
            //     let manualIpChildName = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.subMenuName
            //     console.log(manualIpChildName);
            // }



            if (a.innerHTML == '') {


                for (let s = 0; s < manualChildLength; s++) {
                    let manualIpChildName = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.subMenuName
                    let manualIpChildURL = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.link


                    console.log(manualIpChildName);

                    // let subInputValue = subInput.value;
                    let b = document.createElement('div')
                    b.setAttribute('class', 'subinputboxes tab-pane active item')
                    b.setAttribute('id', 'menu' + k)
                    b.setAttribute('draggable', 'true')

                    a.appendChild(b);

                    let inputTextDiv = document.createElement('div');
                    inputTextDiv.setAttribute('id', 'inputText' + k);
                    inputTextDiv.setAttribute('class', 'inputText');
                    // inputTextDiv.setAttribute('draggable', 'true')

                    b.appendChild(inputTextDiv);

                    let paraAndEditDiv = document.createElement('div')
                    inputTextDiv.appendChild(paraAndEditDiv);
                    paraAndEditDiv.setAttribute('class', 'paraAndEdit')


                    let editbtnSub = document.createElement('button')
                    paraAndEditDiv.appendChild(editbtnSub)
                    editbtnSub.setAttribute('id', 'editsub' + k)
                    editbtnSub.setAttribute('class', 'editsub')
                    editbtnSub.innerHTML = "<i class='ri-pencil-fill'></i>";

                    let inputParaDiv = document.createElement('p');
                    paraAndEditDiv.appendChild(inputParaDiv);
                    inputParaDiv.setAttribute('class', 'inputParaDiv animate__animated animate__backInDown')
                    inputParaDiv.setAttribute('id', 'inputParaDiv' + k)

                    // inputTextDiv.appendChild(inputParaDiv);
                    // inputParaDiv.innerHTML = "<i class='ri-check-double-line'></i>" + subInputValue;
                    inputParaDiv.innerHTML = "<i class='ri-check-double-line'></i>" + manualIpChildName;



                    let urlDiv = document.createElement('div')
                    inputTextDiv.appendChild(urlDiv)
                    urlDiv.setAttribute('class', 'URL')

                    let editUrlBtn = document.createElement('button')
                    urlDiv.appendChild(editUrlBtn)
                    editUrlBtn.setAttribute('class', 'editUrl')
                    editUrlBtn.setAttribute('id', 'editUrl' + k)
                    editUrlBtn.innerHTML = "<i class='ri-pencil-fill'></i>"

                    let urlPara = document.createElement('p')
                    urlDiv.appendChild(urlPara)
                    urlPara.setAttribute('class', 'URLpara')
                    urlPara.setAttribute('id', 'URLpara' + k)
                    urlPara.innerText = manualIpChildURL

                    let div3 = document.createElement('div')
                    div3.setAttribute('class', 'childEditDel')

                    let subInputdel = document.createElement('button')
                    subInputdel.setAttribute('id', 'ipDelBtn' + k)
                    subInputdel.setAttribute('class', 'ipDelBtn')



                    div3.appendChild(subInputdel);
                    inputTextDiv.appendChild(div3);
                    subInputdel.innerHTML = "<i class='ri-delete-bin-fill'></i>";

                    // sub.appendChild(inputTextDiv);



                    let removeSub = async function () {
                        // console.log('hi')
                        this.parentNode.parentNode.parentNode.remove();
                        let delIdOfChild = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.id;

                        await axios.delete(`${api}store/child/${delIdOfChild}`, payload, config);

                    };
                    let subparagraph = document.getElementById('inputParaDiv' + k)
                    let subparagraphURL = document.getElementById('URLpara' + k)

                    async function editSubChild() {
                        let childRantData = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.rankData

                        let childEditId = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.id;
                        let childEditURL = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.link;


                        editbtnSub.disabled = true;

                        subparagraph.contentEditable = true;
                        subparagraph.style.backgroundColor = "#ebebeb";
                        subparagraph.style.color = "black";
                        subparagraph.style.outline = "none";
                        subparagraph.style.borderRadius = "10px";
                        subparagraph.style.padding = "1px 10px";
                        subparagraph.innerHTML = subparagraph.innerText

                        let editDoneBtn = document.createElement('button')
                        paraAndEditDiv.appendChild(editDoneBtn);
                        editDoneBtn.innerHTML = '<i class="ri-arrow-right-fill"></i>';
                        editDoneBtn.setAttribute('type', 'submit');
                        editDoneBtn.setAttribute('id', 'end-editing')


                        editDoneBtn.addEventListener("click", async function () {
                            subparagraph.contentEditable = false;
                            subparagraph.innerHTML = "<i class='ri-check-double-line'></i>" + subparagraph.innerText;
                            subparagraph.style.backgroundColor = "#ebebeb";
                            setTimeout(function () { subparagraph.style.backgroundColor = "white"; }, 3000);

                            subparagraph.style.borderRadius = "20px";
                            subparagraph.style.padding = "0px";

                            editDoneBtn.style.display = 'none';
                            editbtnSub.disabled = false;


                            if (subparagraph.innerHTML === "") {
                                alert('Input Content is Empty')
                            }
                            // console.log(paragraph.innerHTML);

                            let childUpdate = await axios({
                                method: 'put',
                                url: `${api}store/child/${childEditId}`,
                                data: {

                                    "permissionId": childEditId,
                                    "permissionName": childEditURL,
                                    "permissionDescription": subparagraph.innerText,
                                    "permissionGroup": nodeName.innerText,
                                    "permissionControl": "MENU",
                                    "icon": "sub-icon",
                                    "permissionLevel":subparagraph.innerText,
                                    "rankData": childRantData
                                }
                            });
                            // console.log(parentUpdate.data);

                        })


                        subparagraph.onkeydown = async function (event) {
                            if (event.key === "Enter") {
                                subparagraph.contentEditable = false;
                                editDoneBtn.style.display = 'none'

                                subparagraph.style.backgroundColor = "#9efefe";
                                setTimeout(function () { subparagraph.style.backgroundColor = "white"; }, 3000);

                                subparagraph.style.borderRadius = "20px";
                                subparagraph.style.padding = "0px";
                                subparagraph.innerHTML = "<i class='ri-check-double-line'></i>" + subparagraph.innerText;



                                // editDoneBtn2.style.display = 'none';
                                editbtnSub.disabled = false;
                                if (subparagraph.innerHTML === "") {
                                    alert('Input Content is Empty')
                                }
                                let childUpdate = await axios({
                                    method: 'put',
                                    url: `${api}store/child/${childEditId}`,
                                    data: {

                                        "permissionId": childEditId,
                                        "permissionName": childEditURL,
                                        "permissionDescription": subparagraph.innerText,
                                        "permissionGroup": nodeName.innerText,
                                        "permissionControl": "MENU",
                                        "icon": "sub-icon",
                                        "permissionLevel":subparagraph.innerText,
                                        "rankData": childRantData
                                    }
                                });

                            }
                        }


                    }
                    async function editSubChildURL() {
                        // console.log(subparagraphURL);
                        // let childid=editbtnSub.id;
                        let childRantData = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.rankData

                        let childEditId = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.id;
                        // console.log(childEditId);


                        editbtnSub.disabled = true;

                        subparagraphURL.contentEditable = true;
                        subparagraphURL.style.backgroundColor = "#ebebeb";
                        subparagraphURL.style.color = "black";
                        subparagraphURL.style.outline = "none";
                        subparagraphURL.style.borderRadius = "10px";
                        subparagraphURL.style.padding = "1px 10px";
                        subparagraphURL.innerHTML = subparagraphURL.innerText

                        let editDoneBtn = document.createElement('button')
                        urlDiv.appendChild(editDoneBtn);
                        editDoneBtn.innerHTML = '<i class="ri-arrow-right-fill"></i>';
                        editDoneBtn.setAttribute('type', 'submit');
                        editDoneBtn.setAttribute('id', 'end-editing')


                        editDoneBtn.addEventListener("click", async function () {
                            subparagraphURL.contentEditable = false;
                            subparagraphURL.innerHTML = subparagraphURL.innerText;
                            subparagraphURL.style.backgroundColor = "#ebebeb";
                            setTimeout(function () { subparagraphURL.style.backgroundColor = "white"; }, 3000);

                            subparagraphURL.style.borderRadius = "20px";
                            subparagraphURL.style.padding = "0px";

                            editDoneBtn.style.display = 'none';
                            editbtnSub.disabled = false;


                            if (subparagraphURL.innerHTML === "") {
                                alert('Input Content is Empty')
                            }
                            // console.log(paragraph.innerHTML);

                            let childUpdate = await axios({
                                method: 'put',
                                url: `${api}store/child/${childEditId}`,
                                data: {

                                    "permissionId": childEditId,
                                    "permissionName": subparagraphURL.innerText,
                                    "permissionDescription": inputParaDiv.innerText,
                                    "permissionGroup": nodeName.innerText,
                                    "permissionControl": "MENU",
                                    "icon": "sub-icon",
                                    "permissionLevel": inputParaDiv.innerText,
                                    "rankData": childRantData
                                }
                            });
                            // console.log(parentUpdate.data);

                        })


                        subparagraphURL.onkeydown = async function (event) {
                            if (event.key === "Enter") {
                                subparagraphURL.contentEditable = false;
                                editDoneBtn.style.display = 'none'

                                subparagraphURL.style.backgroundColor = "#9efefe";
                                setTimeout(function () { subparagraphURL.style.backgroundColor = "white"; }, 3000);

                                subparagraphURL.style.borderRadius = "20px";
                                subparagraphURL.style.padding = "0px";
                                subparagraphURL.innerHTML = subparagraphURL.innerText;


                                if (subparagraphURL.innerHTML === "") {
                                    alert('Input Content is Empty')
                                }
                                // editDoneBtn2.style.display = 'none';
                                editbtnSub.disabled = false;
                                if (subparagraphURL.innerHTML === "") {
                                    alert('Input Content is Empty')
                                }
                                let childUpdate = await axios({
                                    method: 'put',
                                    url: `${api}store/child/${childEditId}`,
                                    data: {

                                        "permissionId": childEditId,
                                        "permissionName": subparagraphURL.innerText,
                                        "permissionDescription": inputParaDiv.innerText,
                                        "permissionGroup": nodeName.innerText,
                                        "permissionControl": "MENU",
                                        "icon": "sub-icon",
                                        "permissionLevel": inputParaDiv.innerText,
                                        "rankData": childRantData
                                    }
                                });

                            }
                        }


                    }
                    document.getElementById('editsub' + k).onclick = editSubChild;
                    document.getElementById('editUrl' + k).onclick = editSubChildURL;

                    subInputdel.onclick = removeSub;

                    k++
                }

                function handleDragStart(e) {
                    this.style.opacity = "0.4";

                    dragSrcEl = this;

                    e.dataTransfer.effectAllowed = "move";
                    //e.dataTransfer.setData("text/html", this.innerHTML);
                }

                function handleDragEnd(e) {
                    this.style.opacity = "1";
                }

                function handleDragEnd(e) {
                    this.style.opacity = "1";

                    items.forEach(function (item) {
                        item.classList.remove("over");
                    });
                    dragSrcEl = undefined;
                }

                function handleDragOver(e) {
                    if (e.preventDefault) {
                        e.preventDefault();
                    }

                    return false;
                }

                function handleDragEnter(e) {
                    this.classList.add("over");
                }

                function handleDragLeave(e) {
                    this.classList.remove("over");
                }

                function handleDrop(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    if (dragSrcEl !== this) {
                        if (dropAction === "swap") {
                            swapItems(dragSrcEl, this);
                        } else {
                            shiftItems(dragSrcEl, this);
                        }
                        dragSrcEl = undefined;
                    }
                    return false;
                }

                function swapItems(a, b) {
                    const tmp = a.innerHTML;
                    a.innerHTML = b.innerHTML;
                    b.innerHTML = tmp;
                }

                function shiftItems(srcElem, destElem) {
                    const items = Array.from(document.querySelectorAll(".item"));
                    const srcIdx = items.indexOf(srcElem);
                    const destIdx = items.indexOf(destElem);
                    console.log(`srcIdx = ${srcIdx}, destIdx= ${destIdx}`);
                    if (srcIdx < destIdx) {
                        // moving down
                        for (let i = srcIdx; i < destIdx - 1; i++) {
                            console.log(`swapping ${i} and ${i + 1}`);
                            swapItems(items[i], items[i + 1]);
                        }
                    } else {
                        // moving up
                        for (let i = srcIdx - 1; i >= destIdx; i--) {
                            console.log(`swapping ${i} and ${i + 1}`);
                            swapItems(items[i], items[i + 1]);
                        }
                    }
                }

                let dragSrcEl;
                let dropAction = "shift";
                const items = document.querySelectorAll(".item");
                items.forEach(function (item) {
                    item.addEventListener("dragstart", handleDragStart);
                    item.addEventListener("dragover", handleDragOver);
                    item.addEventListener("dragenter", handleDragEnter);
                    item.addEventListener("dragleave", handleDragLeave);
                    item.addEventListener("dragend", handleDragEnd);
                    item.addEventListener("drop", handleDrop);
                });
                // document.querySelector("#dropaction").addEventListener("change", (e) => {
                //     dropAction = e.target.value;
                // });

            }

            async function getSubIpValue() {

                firstApiResponse = await axios.get(`${api}store/getParentChild`, payload, config);


                let subInputValue = subInput.value;
                let b = document.createElement('div')
                b.setAttribute('class', 'subinputboxes tab-pane active item')
                b.setAttribute('id', 'menu' + k)
                b.setAttribute('draggable', 'true')

                a.appendChild(b);

                let inputTextDiv = document.createElement('div');
                inputTextDiv.setAttribute('id', 'inputText' + k);
                inputTextDiv.setAttribute('class', 'inputText');
                // inputTextDiv.setAttribute('draggable', 'true')

                b.appendChild(inputTextDiv);

                let paraAndEditDiv = document.createElement('div')
                inputTextDiv.appendChild(paraAndEditDiv);
                paraAndEditDiv.setAttribute('class', 'paraAndEdit')


                let editbtnSub = document.createElement('button')
                paraAndEditDiv.appendChild(editbtnSub)
                editbtnSub.setAttribute('id', 'editsub' + k)
                editbtnSub.setAttribute('class', 'editsub')
                editbtnSub.innerHTML = "<i class='ri-pencil-fill'></i>";

                let inputParaDiv = document.createElement('p');
                paraAndEditDiv.appendChild(inputParaDiv);
                inputParaDiv.setAttribute('class', 'inputParaDiv animate__animated animate__backInDown')
                inputParaDiv.setAttribute('id', 'inputParaDiv' + k)
                inputParaDiv.innerHTML = "<i class='ri-check-double-line'></i>" + subInputValue;



                let urlDiv = document.createElement('div')
                inputTextDiv.appendChild(urlDiv)
                urlDiv.setAttribute('class', 'URL')

                let editUrlBtn = document.createElement('button')
                urlDiv.appendChild(editUrlBtn)
                editUrlBtn.setAttribute('class', 'editUrl')
                editUrlBtn.setAttribute('id', 'editUrl' + k)
                editUrlBtn.innerHTML = "<i class='ri-pencil-fill'></i>"

                let urlPara = document.createElement('p')
                urlDiv.appendChild(urlPara)
                urlPara.setAttribute('class', 'URLpara')
                urlPara.setAttribute('id', 'URLpara' + k)
                urlPara.innerText = 'Edit Url here'

                let div3 = document.createElement('div')
                div3.setAttribute('class', 'childEditDel')


                let subInputdel = document.createElement('button')
                subInputdel.setAttribute('id', 'ipDelBtn' + k)
                subInputdel.setAttribute('class', 'ipDelBtn')



                div3.appendChild(subInputdel);
                inputTextDiv.appendChild(div3);
                subInputdel.innerHTML = "<i class='ri-delete-bin-fill'></i>";

                let subparagraph = document.getElementById('inputParaDiv' + k)
                let subparagraphURL = document.getElementById('URLpara' + k)

                await axios({
                    method: 'post',
                    url: `${api}store/child`,
                    data: {

                        "permissionName": urlPara.innerText,
                        "permissionDescription": subInputValue,
                        "permissionGroup": nodeName.innerText,
                        "permissionControl": "MENU",
                        "icon": "sub-icon",
                        "permissionLevel": subInputValue,
                        "rankData": rankDataChild++,
                    }
                });
                console.log(firstApiResponse)
                let removeSub = async function () {
                    this.parentNode.parentNode.parentNode.remove();
                    ChildName = subparagraph.innerText;
                    let childEditLen = firstApiResponse1.data[0].payLoad[x].menus.length;
                    // console.log(ChildName)
                    // console.log(childEditLen)
                    let delIdOfChild = 0;
                    let childRantData = 0;
                    for (let s = 0; s < childEditLen; s++) {
                        let childEditName = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.subMenuName

                        if (childEditName == ChildName) {
                            childRantData = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.rankData
                            delIdOfChild = firstApiResponse1.data[0].payLoad[x].menus[s].subMenu.id;


                        }
                    }

                    await axios.delete(`${api}store/child/${delIdOfChild}`, payload, config);

                };

                async function editSubChild() {

                    firstApiResponse = await axios.get(`${api}store/getParentChild`, payload, config);


                    ChildName = subparagraph.innerText;
                    let childEditLen = firstApiResponse.data[0].payLoad[parentIndex].menus.length;
                    // console.log(ChildName)
                    // console.log(childEditLen)
                    let childEditId = 0;
                    let childRantData = 0;
                    let childEditURL = ''
                    for (let s = 0; s < childEditLen; s++) {
                        let childEditName = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.subMenuName

                        if (childEditName == ChildName) {
                            childRantData = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.rankData
                            childEditId = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.id
                            childEditURL = `${firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.id}`
                        }
                    }

                    editbtnSub.disabled = true;

                    subparagraph.contentEditable = true;
                    subparagraph.style.backgroundColor = "#ebebeb";
                    subparagraph.style.color = "black";
                    subparagraph.style.outline = "none";
                    subparagraph.style.borderRadius = "10px";
                    subparagraph.style.padding = "1px 10px";
                    subparagraph.innerHTML = subparagraph.innerText

                    let editDoneBtn = document.createElement('button')
                    paraAndEditDiv.appendChild(editDoneBtn);
                    editDoneBtn.innerHTML = '<i class="ri-arrow-right-fill"></i>';
                    editDoneBtn.setAttribute('type', 'submit');
                    editDoneBtn.setAttribute('id', 'end-editing')


                    editDoneBtn.addEventListener("click", async function () {
                        subparagraph.contentEditable = false;
                        subparagraph.innerHTML = "<i class='ri-check-double-line'></i>" + subparagraph.innerText;
                        subparagraph.style.backgroundColor = "#ebebeb";
                        setTimeout(function () { subparagraph.style.backgroundColor = "white"; }, 3000);

                        subparagraph.style.borderRadius = "20px";
                        subparagraph.style.padding = "0px";

                        editDoneBtn.style.display = 'none';
                        editbtnSub.disabled = false;


                        if (subparagraph.innerHTML === "") {
                            alert('Input Content is Empty')
                        }
                        // console.log(paragraph.innerHTML);

                        let childUpdate = await axios({
                            method: 'put',
                            url: `${api}store/child/${childEditId}`,
                            data: {

                                "permissionId": childEditId,
                                "permissionName": childEditURL,
                                "permissionDescription": subparagraph.innerText,
                                "permissionGroup": nodeName.innerText,
                                "permissionControl": "MENU",
                                "icon": "sub-icon",
                                "permissionLevel":  subparagraph.innerText,
                                "rankData": childRantData
                            }
                        });
                        // console.log(parentUpdate.data);

                    })


                    subparagraph.onkeydown = async function (event) {
                        if (event.key === "Enter") {
                            subparagraph.contentEditable = false;
                            editDoneBtn.style.display = 'none'

                            subparagraph.style.backgroundColor = "#9efefe";
                            setTimeout(function () { subparagraph.style.backgroundColor = "white"; }, 3000);

                            subparagraph.style.borderRadius = "20px";
                            subparagraph.style.padding = "0px";
                            subparagraph.innerHTML = "<i class='ri-check-double-line'></i>" + subparagraph.innerText;



                            // editDoneBtn2.style.display = 'none';
                            editbtnSub.disabled = false;
                            if (subparagraph.innerHTML === "") {
                                alert('Input Content is Empty')
                            }
                            let childUpdate = await axios({
                                method: 'put',
                                url: `${api}store/child/${childEditId}`,
                                data: {

                                    "permissionId": childEditId,
                                    "permissionName": childEditURL,
                                    "permissionDescription": subparagraph.innerText,
                                    "permissionGroup": nodeName.innerText,
                                    "permissionControl": "MENU",
                                    "icon": "sub-icon",
                                    "permissionLevel":  subparagraph.innerText,
                                    "rankData": childRantData
                                }
                            });

                        }
                    }


                }
                async function editSubChildURL() {
                    firstApiResponse = await axios.get(`${api}store/getParentChild`, payload, config);


                    ChildName = subparagraph.innerText;
                    let childEditLen = firstApiResponse.data[0].payLoad[parentIndex].menus.length;
                    // console.log(ChildName)
                    // console.log(childEditLen)
                    let childEditId = 0;
                    let childRantData = 0;
                    for (let s = 0; s < childEditLen; s++) {
                        let childEditName = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.subMenuName

                        if (childEditName == ChildName) {
                            childRantData = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.rankData
                            childEditId = firstApiResponse.data[0].payLoad[parentIndex].menus[s].subMenu.id


                        }
                    }


                    editbtnSub.disabled = true;

                    subparagraphURL.contentEditable = true;
                    subparagraphURL.style.backgroundColor = "#ebebeb";
                    subparagraphURL.style.color = "black";
                    subparagraphURL.style.outline = "none";
                    subparagraphURL.style.borderRadius = "10px";
                    subparagraphURL.style.padding = "1px 10px";
                    subparagraphURL.innerHTML = subparagraphURL.innerText

                    let editDoneBtn = document.createElement('button')
                    urlDiv.appendChild(editDoneBtn);
                    editDoneBtn.innerHTML = '<i class="ri-arrow-right-fill"></i>';
                    editDoneBtn.setAttribute('type', 'submit');
                    editDoneBtn.setAttribute('id', 'end-editing')


                    editDoneBtn.addEventListener("click", async function () {
                        subparagraphURL.contentEditable = false;
                        subparagraphURL.innerHTML = subparagraphURL.innerText;
                        subparagraphURL.style.backgroundColor = "#ebebeb";
                        setTimeout(function () { subparagraphURL.style.backgroundColor = "white"; }, 3000);

                        subparagraphURL.style.borderRadius = "20px";
                        subparagraphURL.style.padding = "0px";

                        editDoneBtn.style.display = 'none';
                        editbtnSub.disabled = false;


                        if (subparagraphURL.innerHTML === "") {
                            alert('Input Content is Empty')
                        }
                        // console.log(paragraph.innerHTML);

                        let childUpdate = await axios({
                            method: 'put',
                            url: `${api}store/child/${childEditId}`,
                            data: {

                                "permissionId": childEditId,
                                "permissionName": subparagraphURL.innerText,
                                "permissionDescription": inputParaDiv.innerText,
                                "permissionGroup": nodeName.innerText,
                                "permissionControl": "MENU",
                                "icon": "sub-icon",
                                "permissionLevel": inputParaDiv.innerText,
                                "rankData": childRantData
                            }
                        });
                        // console.log(parentUpdate.data);

                    })


                    subparagraphURL.onkeydown = async function (event) {
                        if (event.key === "Enter") {
                            subparagraphURL.contentEditable = false;
                            editDoneBtn.style.display = 'none'

                            subparagraphURL.style.backgroundColor = "#9efefe";
                            setTimeout(function () { subparagraphURL.style.backgroundColor = "white"; }, 3000);

                            subparagraphURL.style.borderRadius = "20px";
                            subparagraphURL.style.padding = "0px";
                            subparagraphURL.innerHTML = subparagraphURL.innerText;


                            if (subparagraphURL.innerHTML === "") {
                                alert('Input Content is Empty')
                            }
                            // editDoneBtn2.style.display = 'none';
                            editbtnSub.disabled = false;
                            if (subparagraphURL.innerHTML === "") {
                                alert('Input Content is Empty')
                            }
                            let childUpdate = await axios({
                                method: 'put',
                                url: `${api}store/child/${childEditId}`,
                                data: {

                                    "permissionId": childEditId,
                                    "permissionName": subparagraphURL.innerText,
                                    "permissionDescription": inputParaDiv.innerText,
                                    "permissionGroup": nodeName.innerText,
                                    "permissionControl": "MENU",
                                    "icon": "sub-icon",
                                    "permissionLevel": inputParaDiv.innerText,
                                    "rankData": childRantData
                                }
                            });

                        }
                    }


                }
                editbtnSub.onclick = editSubChild;
                document.getElementById('editUrl' + k).onclick = editSubChildURL;

                subInputdel.onclick = removeSub;

                k++

                function handleDragStart(e) {
                    this.style.opacity = "0.4";

                    dragSrcEl = this;

                    e.dataTransfer.effectAllowed = "move";
                    //e.dataTransfer.setData("text/html", this.innerHTML);
                }

                function handleDragEnd(e) {
                    this.style.opacity = "1";
                }

                function handleDragEnd(e) {
                    this.style.opacity = "1";

                    items.forEach(function (item) {
                        item.classList.remove("over");
                    });
                    dragSrcEl = undefined;
                }

                function handleDragOver(e) {
                    if (e.preventDefault) {
                        e.preventDefault();
                    }

                    return false;
                }

                function handleDragEnter(e) {
                    this.classList.add("over");
                }

                function handleDragLeave(e) {
                    this.classList.remove("over");
                }

                function handleDrop(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    if (dragSrcEl !== this) {
                        if (dropAction === "swap") {
                            swapItems(dragSrcEl, this);
                        } else {
                            shiftItems(dragSrcEl, this);
                        }
                        dragSrcEl = undefined;
                    }
                    return false;
                }

                function swapItems(a, b) {
                    const tmp = a.innerHTML;
                    a.innerHTML = b.innerHTML;
                    b.innerHTML = tmp;
                }

                function shiftItems(srcElem, destElem) {
                    const items = Array.from(document.querySelectorAll(".item"));
                    const srcIdx = items.indexOf(srcElem);
                    const destIdx = items.indexOf(destElem);
                    console.log(`srcIdx = ${srcIdx}, destIdx= ${destIdx}`);
                    if (srcIdx < destIdx) {
                        // moving down
                        for (let i = srcIdx; i < destIdx - 1; i++) {
                            console.log(`swapping ${i} and ${i + 1}`);
                            swapItems(items[i], items[i + 1]);
                        }
                    } else {
                        // moving up
                        for (let i = srcIdx - 1; i >= destIdx; i--) {
                            console.log(`swapping ${i} and ${i + 1}`);
                            swapItems(items[i], items[i + 1]);
                        }
                    }
                }

                let dragSrcEl;
                let dropAction = "shift";
                const items = document.querySelectorAll(".item");
                items.forEach(function (item) {
                    item.addEventListener("dragstart", handleDragStart);
                    item.addEventListener("dragover", handleDragOver);
                    item.addEventListener("dragenter", handleDragEnter);
                    item.addEventListener("dragleave", handleDragLeave);
                    item.addEventListener("dragend", handleDragEnd);
                    item.addEventListener("drop", handleDrop);
                });
                // document.querySelector("#dropaction").addEventListener("change", (e) => {
                //     dropAction = e.target.value;
                // });


            }

            subInputbtn.onclick = getSubIpValue;
            // console.log(subInputbtn);
            // }
        }
        // btn1.disabled = true;
        j++;
    }
    async function updatedValue() {

        let ParentValue = paragraph.innerText;
        let posOfParent = 0;
        for (let x = 0; x < parentLen; x++) {
            parentName = firstApiResponse.data[0].payLoad[x].module;
            if (ParentValue == parentName) {
                posOfParent = x;
            }
        }

        let idOfParent = firstApiResponse.data[0].payLoad[posOfParent].id;
        let rankData = firstApiResponse.data[0].payLoad[posOfParent].rankData;
        let parentURL = firstApiResponse.data[0].payLoad[x].link


        console.log(idOfParent);




        editbtn.disabled = true;

        paragraph.contentEditable = true;
        paragraph.style.backgroundColor = "#ebebeb";
        paragraph.style.color = "black";
        paragraph.style.outline = "none";
        paragraph.style.borderRadius = "10px";
        paragraph.style.padding = "1px 10px";

        let editDoneBtn = document.createElement('button')
        div1.appendChild(editDoneBtn);
        editDoneBtn.innerHTML = '<i class="ri-arrow-right-fill"></i>';
        editDoneBtn.setAttribute('type', 'submit');
        editDoneBtn.setAttribute('id', 'end-editing')



        editDoneBtn.addEventListener("click", function () {
            paragraph.contentEditable = false;
            paragraph.style.backgroundColor = "#b6ff46";
            setTimeout(function () { paragraph.style.backgroundColor = "white"; }, 3000);

            paragraph.style.borderRadius = "20px";
            paragraph.style.padding = "0px";

            editDoneBtn.style.display = 'none';
            editbtn.disabled = false;
            editbtn.disabled = false;

            // console.log(paragraph.innerHTML);

            let parentUpdate = axios({
                method: 'put',
                url: `${api}store/parent/${idOfParent}`,
                data: {

                    "permissionId": idOfParent,
                    "permissionName": parentURL,
                    "permissionDescription": paragraph.innerHTML,
                    "permissionGroup": "Root",
                    "permissionControl": "MENU",
                    // "icon": "sub-icon",
                    "permissionLevel": paragraph.innerHTML,
                    "rankData": rankData,


                }
            });
            // console.log(parentUpdate.data);

        })

        paragraph.onkeydown = async function (event) {

            if (event.key === "Enter") {
                editDoneBtn.style.display = 'none'
                paragraph.contentEditable = false;
                paragraph.style.backgroundColor = "#b6ff46";
                setTimeout(function () { paragraph.style.backgroundColor = "white"; }, 3000);

                paragraph.style.borderRadius = "20px";
                paragraph.style.padding = "0px";

                // editDoneBtn.style.display = 'none';
                // editbtn.disabled = false;
                // editbtn.disabled = false;

                // console.log(paragraph.innerHTML);

                let parentUpdate = await axios({
                    method: 'put',
                    url: `${api}store/parent/${idOfParent}`,
                    data: {

                        "permissionId": idOfParent,
                        "permissionName": parentURL,
                        "permissionDescription": paragraph.innerHTML,
                        "permissionGroup": "Root",
                        "permissionControl": "MENU",
                        // "icon": "sub-icon",
                        "permissionLevel": paragraph.innerHTML,
                        "rankData": rankData,
                    }
                });
                // console.log(parentUpdate.data);

            }
        }




        // editbtn.disabled = true;

        // paragraph.contentEditable = true;
        // paragraph.style.backgroundColor = "#ebebeb";
        // paragraph.style.color = "black";
        // paragraph.style.outline = "none";
        // paragraph.style.borderRadius = "10px";
        // paragraph.style.padding = "1px 10px";

        // paragraph.onkeydown = function (event) {

        //     if (event.key === "Enter") {
        //         paragraph.contentEditable = false;
        //         paragraph.style.backgroundColor = "#b6ff46";
        //         setTimeout(function () { paragraph.style.backgroundColor = "white"; }, 3000);

        //         paragraph.style.borderRadius = "20px";
        //         paragraph.style.padding = "0px";
        //         let parentUpdate = axios({
        //             method: 'put',
        //             url: `${api}store/parent/${idOfParent}`,
        //             data: {

        //                 "permissionId": idOfParent,
        //                 "permissionName": "/coupon/special-coupon",
        //                 "permissionDescription": paragraph.innerHTML,
        //                 "permissionGroup": "Root",
        //                 "permissionControl": "MENU",
        //                 // "icon": "sub-icon",
        //                 "permissionLevel": "Special Coupon",
        //                 "rankData": rankData
        //             }
        //         });
        //         console.log(parentUpdate.data);

        //     }
        // }

    }


    document.getElementById('edit' + i).onclick = updatedValue;

    document.getElementById('add' + i).onclick = subMainDiv;

    btn2.onclick = remove;
    i++;

    // }
}



