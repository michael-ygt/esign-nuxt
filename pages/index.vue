<template>
  <div>
    <div class="mb-4 flex justify-between">
      <div class="mr-4">
        <div class="mb-4">
          <span class="opacity-50">Booking #:</span>
          {{ bookingNumber }}
        </div>
        <div class="mb-4">
          <span class="opacity-50">Customer:</span>
          <span>{{ customer }}</span>
        </div>
      </div>

      <div>
        <div class="mb-4">
          <span class="opacity-50">Booked:</span>
          {{ bookingDate }}
        </div>
        <div class="mb-4">
          <span class="opacity-50">Arrival:</span>
          {{ arrivalDate }}
        </div>
      </div>
    </div>

    <div
      v-for="(item, i) in items"
      :key="i"
      class="-mx-4 sm:mx-0 mb-8 bg-white border border-solid border-grey-lighter shadow sm:rounded">
      <div class="js-itinerary-item-header flex items-center cursor-pointer select-none py-4 mx-4 border-b border-grey-lighter">
        <div class="flex-1 mr-4 sm:mr-0 leading-tight">
          <div class="flex">
            <div class="flex-1 font-bold sm:font-normal text-xl sm:text-2xl">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>

      <div class="py-4 px-4 sm:px-6">
        <ul class="list-reset mb-8">
          <li
            v-for="(line, i) in item.lines"
            :key="i"
            class="flex flex-col justify-between mb-4 sm:flex-row sm:items-center">
            {{ line }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Booking reservation - YourGolfTravel E-Sign"
  },
  asyncData() {
    return {
      bookingNumber: "000000000",
      customer: "Roger Correia",
      bookingDate: "September 28, 2018",
      arrivalDate: "May 2, 2019",
      items: [
        {
          title: "Hotel La Manga Club",
          lines: [
            "2 nights Bed & Breakfast for 16 guests",
            "Check-in Thursday, 2 May 2019 after 15:00",
            "Check-out Saturday, 4 May 2019 before 11:00",
            "8 Double rooms (2 guests per room)"
          ]
        },
        {
          title: "North Course",
          lines: [
            "1 round for 16 players",
            "4 tee times on Friday, 3 May 2019 at 10:45",
            "8 buggies included in price"
          ]
        },
        {
          title: "South Course",
          lines: [
            "1 round for 16 players",
            "4 tee times on Saturday, 4 May 2019 at 08:30",
            "8 buggies included in price"
          ]
        }
      ]
    };
  }
};
</script>
