app.component('product-weergave', {
    template:
        `
            <div class="d-none d-sm-inline">
                    <div class="row ">
                        <div class="col-sm-8">
                            <table class="table align-middle">
                                <thead>
                                <tr>
                                    <th class="col-lg-4 "></th>
                                    <th class="col-lg-4">Product</th>
                                    <th class="col-lg-1">Price</th>
                                    <th class="col-lg-2">Quantity</th>
                                    <th class="col-lg-1">Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(item, index) in products" :key="item.id" @mouseover="updateVoorraad(index)">
                                    <td class="text-center">
                                        <img v-bind:src="item.image" class="img-fluid" alt="">
                                    </td>
                                    <td class="pe-5 fs-5">{{item.merk}}</td>
                                    <td> &euro;{{item.prijs}}</td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <button @click="removeFromCart"  class="btn"><i class="bi bi-dash-circle"></i></button>
                                            {{item.winkelwagen}}
                                            <button @click="addToCart"  class="btn"><i class="bi bi-plus-circle"></i></button>
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        <p>&euro;{{item.totaal}}</p>
                                        <button type="button" @click="deleteProduct(index),updateVoorraad(index)" class="btn my-auto me-2"><i class="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-sm-4 my-4">
                            <div class=" bg-grey rounded-2 text-center mt-3">
                                <p class="pt-3">Total products ({{item}})</p>
                                <p class="fw-bold"> &euro;{{totaalBedrag}}</p>
                                <p>Verzendingskosten</p>
                                <p class="fw-bold">&euro;4.99</p>
                                <hr>
                                <p>Totaal</p>
                                <p v-if="totaalBedrag <= 0">&euro; 0</p>
                                <p v-else class="fw-bold"> &euro;{{totaalBedrag + 4.99}}</p>
                                <div class="row mb-3">
                                    <div>
                                        <a href="checkout.html" class="btn mx-auto btn-outline-primary" >Betalen</a>
                                    </div>
                                    <p class="my-3">of</p>
                                    <div>
                                        <a href="producten.html"
                                           class="btn mb-3 mx-auto rounded btn-outline-success">Verder
                                            winkelen
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="d-sm-none text-center">
                <div v-for="(item, index) in products" :key="item.id" @mouseover="updateVoorraad(index)">
                        <div>
                            <img v-bind:src="item.image" class="img-fluid" alt="">
                            <div class="row mt-3 ">
                                <div class="col-6">
                                    <p class="fw-bold m-0">Product</p>
                                    <p>{{item.merk}}</p>
                                </div>
                                <div class="col-6">
                                    <p class="fw-bold m-0">Price</p>
                                    <p> &euro;{{item.prijs}}</p>
                                </div>
                            </div>
                           <div class="row mt-3">
                               <div class="col-6">
                                   <p class="fw-bold">Quantity</p>
                                   <div class="text-center">
                                        <div class=" align-items-center mx-auto">
                                            <button @click="removeFromCart"  class="btn"><i class="bi bi-dash-circle"></i></button>
                                            {{item.winkelwagen}}
                                            <button @click="addToCart"  class="btn"><i class="bi bi-plus-circle"></i></button>
                                        </div>
                                   </div>
                               </div>
                               <div class="col-6">
                                 <td class="text-center">
                                        <p>Totaal: &euro;{{item.totaal}}</p>
                                        <button type="button" @click="deleteProduct(index),updateVoorraad(index)" class="btn my-auto me-2"><i class="bi bi-trash"></i></button>
                                    </td>
                               </div>
                           </div>
                        </div>
                        <hr>
                   </div>
                <div>
                    <p>Total products ({{item}})</p>
                      <p class="fw-bold">&euro;{{totaalBedrag}}</p>
                   <p>Verzendingskosten</p>
                   <p class="fw-bold">€4.99</p>
                   <hr>
                   <p>Totaal</p>
                      <p v-if="totaalBedrag <= 0">&euro; 0</p>
                      <p v-else class="fw-bold">&euro;{{totaalBedrag + 4.99}}</p>
                   <div>
                       <a href="checkout.html" class="btn btn-outline-primary" >Betalen</a>
                   </div>
                   <p class="my-3">of</p>
                   <div>
                      <a href="producten.html" class="btn btn-outline-success">Verder winkelen</a>
                   </div>
                </div>
            </div>
   `,
    data() {
        return {
            products: [
                {
                    id: 1,
                    product: "Men's Watch",
                    prijs: 300,
                    merk: 'Hugo Boss',
                    beschrijving: 'This watch is super good ^^',
                    image: '../images/hugo-boss-350x250.png',
                    aantal: "5",
                    winkelwagen: 1,
                    totaal: 300,
                },
                {
                    id: 2,
                    product: "Men's Watch",
                    prijs: 500,
                    merk: 'Armani',
                    beschrijving: 'This watch is super good ^^',
                    image: '../images/emporio-armani-350x250.png',
                    aantal: "3",
                    winkelwagen: 1,
                    totaal: 500,
                },
                {
                    id: 3,
                    product: "Men's Watch",
                    prijs: 200,
                    merk: 'Casio',
                    beschrijving: 'This watch is super good ^^',
                    image: '../images/casio-350x250.png',
                    aantal: "12",
                    winkelwagen: 1,
                    totaal: 200,
                },
            ],
            selectProduct: 0,
            totaalBedrag: 1000,
            item: 3,
        }
    },
    methods: {

        addToCart() {
            this.products[this.selectProduct].winkelwagen += 1
            if (this.products[this.selectProduct].winkelwagen > this.products[this.selectProduct].aantal) {
                this.products[this.selectProduct].winkelwagen = this.products[this.selectProduct].aantal

            } else {
                this.products[this.selectProduct].totaal += this.products[this.selectProduct].prijs
                this.totaalBedrag += this.products[this.selectProduct].prijs
                this.item += 1
            }

        },
        removeFromCart(index) {

            if (this.products[this.selectProduct].totaal <= 0) {
                this.products[this.selectProduct].totaal = 0
                this.products[this.selectProduct].winkelwagen = 0
            } else {
                this.item -= 1
                this.products[this.selectProduct].winkelwagen -= 1
                this.products[this.selectProduct].totaal -= this.products[this.selectProduct].prijs
                this.totaalBedrag -= this.products[this.selectProduct].prijs
            }
        },

        deleteProduct(index) {
            this.item -= this.products[this.selectProduct].winkelwagen
            this.totaalBedrag -= this.products[this.selectProduct].totaal
            this.products.splice(index, 1);

        },

        updateVoorraad(index) {
            this.selectProduct = index
        },
    },
})
