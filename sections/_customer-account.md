<div class="page-account">
    <aside class="">
      <div class="account-card">
        <h2 class="account-card-title">Account Details</h2>
        <div class="account-card-detail">
          <p class="account-name">{{ customer.first_name }}&nbsp;{{ customer.last_name }}</p>
          <p class="account-email">{{ customer.email }}</p>
        </div>
        <h2 class="account-card-title">Primary Address</h2>
        <div class="account-card-detail">
          <address class="account-address">{{ customer.default_address | format_address }}</address>
        </div>
  
        {% comment %}
          <a href="{{ routes.account_addresses_url }}">
            {{ 'customer.account.view_addresses' | t }} ({{ customer.addresses_count }})
          </a>
        {% endcomment %}
  
        <a class="account-card-button" href="{{ routes.account_logout_url }}">
          <svg width="24" height="24">
            <use href="#layout" />
          </svg>
          Log Out
        </a>
      </div>
    </aside>
    <section class="customer-account-detail">
      <div class="customer-account-order-lists">
      {% paginate customer.orders by 24 %}
      {% if customer.orders.size > 0 %}
      {% for order in customer.orders %}
      <div class="order-list">
        <div class="order-list-header">
          <div class="order-list-header-data">
            <div class="order-placed-date">
              <span class="data-title">Order Placed</span>
              <span class="data-value">{{ order.created_at | time_tag: format: 'date' }}</span>
            </div>
            <div class="order-placed-total">
              <span class="data-title">Total</span>
              <span class="data-value">{{ order.total_price | money_with_currency }}</span>
            </div>
            <div class="order-placed-status">
              <span class="data-title">Status</span>
              <span class="data-value">{{ order.fulfillment_status_label }}</span>
            </div>
          </div>
          <div>
            <div class="order-placed-id">
              <span class="data-title">Order</span>
              <span class="data-value">{{ order.name }}</span>
            </div>
            <div>
              <!--
            <div class="order-invoice">
                <span class="data-value">
                  <a href="{{ order.customer_url }}" target="_blank"> View order details
                  </a>
                </span>
              </div> -->
              <!--
                <div class="data-invoice">
          <span class="data-value"> <a href="{{ order.customer_url }}" target="_blank"> Invoice </a></span>
        </div> -->
            </div>
          </div>
        </div>
        <div class="order-list-data">
          <ul>
            {% for line_item in order.line_items %}
            <li>
              {% if line_item.url != blank %}
              <a href="{{shop.secure_url}}/{{ line_item.url }}" target="_blank">
                {% endif %}
                {% if line_item.image != blank %}
                <span>
                  {{ line_item.image | image_url: width: 100, height: 100, format: 'pjpg' | image_tag : alt:
                  line_item.image.alt }}
                </span>
                {% else %}
                {{ 'product-1' | placeholder_svg_tag: 'line-item-image' }}
                {% endif %}
                {% if line_item.url != blank %}
              </a>
              {% endif %}
              <span>
                {{ line_item.title }}
              </span>
            </li>
            {% endfor %}
          </ul>
        </div>
      </div>
      {% endfor %}
      {% else %}
      <p>{{ 'customer.orders.none' | t }}</p>
      {% endif %}
      <div class="pagination--number">
        {{ paginate | default_pagination: next: 'Next', previous: 'Prev' }}
      </div>
      {% endpaginate %}
    </div>
    </section>
  </div>
  