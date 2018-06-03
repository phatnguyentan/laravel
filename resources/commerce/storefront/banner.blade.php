<div class="storefront-banner">
    <img class="storefront-banner-img" src="/img/shop-home.jpg" style="width: 100%; padding-bottom: 24px;">
    @foreach ($products as $product)
        <tr data-cart-row="{!! $product->cart_id !!}">
            <td>
                <a href="{{ $product->href }}">{!! $product->name !!}</a>
            </td>
            <td>{!! $product->code !!}</td>
            <td>${!! $product->price !!}</td>
            <td>
                <div class="form-group">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <button class="btn btn-sm btn-outline-secondary cart-subtract" type="button"><span class="fa fa-minus"></span></button>
                        </div>
                        <input class="store-form product-count text-center" data-product="{!! $product->cart_id !!}" value="{!! $product->quantity !!}">
                        <div class="input-group-append">
                            <button class="btn btn-sm btn-outline-secondary cart-add" type="button"><span class="fa fa-plus"></span></button>
                        </div>
                    </div>
                </div>
            </td>
            <td class="text-right">{!! $product->removeFromCartBtn($product->cart_id, 'Remove From Cart <span class="fa fa-shopping-cart"></span>', 'btn btn-sm btn-outline-warning') !!}</td>
        </tr>
    @endforeach
</div>