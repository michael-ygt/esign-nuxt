<template>
  <div>
    <div class="background--gradient--primary text-white p-4 sm:p-8 border-b-8 border-blue-dark sm:rounded-t">
      <div class="flex justify-between">
        <span class="sm:text-lg opacity-50">
          Booking reservation
        </span>

        <div class="leading-tight text-right text-sm ml-4 mb-4 rb-updated-by">
          <div class="text-xs opacity-50">
            Confirmed by
          </div>
          {{ confirmedBy }}
        </div>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-center justify-between">
        <div class="text-2xl sm:text-4xl leading-tight">
          {{ title }}
        </div>
      </div>
    </div>

    <div class="px-4 sm:px-8 py-8">
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
        <div class="flex items-center py-4 mx-4 border-b border-grey-lighter">
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

          <span class="uppercase text-sm font-bold leading-normal tracking-wide cursor-pointer select-none px-3 py-2 rounded mr-4">
            Approve &#10004;
          </span>
          <span class="uppercase text-sm font-bold leading-normal tracking-wide cursor-pointer select-none px-3 py-2 rounded">
            Reject &#10008;
          </span>
        </div>
      </div>

      <div class="text-center">
        <button class="button button--primary">Confirm reservation</button>
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
      title: "Hotel La Manga Club",
      confirmedBy: "Joe La Manga",
      bookingNumber: "371117-020518",
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

<style>
.background--gradient--primary {
  background-image: linear-gradient(
    to top left,
    config("colors['blue-dark']"),
    config("colors.blue")
  );
}

.button {
  @apply inline-block font-bold px-4 py-2 rounded shadow leading-normal tracking-wide select-none;
}

.button--primary:active {
  @apply shadow-none;
}
.button--primary {
  @apply bg-blue-dark text-white;
}

.button--primary:focus,
.button--primary:hover {
  @apply bg-blue outline-none shadow-md;
}
</style>
