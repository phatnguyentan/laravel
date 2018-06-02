{!! $blok['_editable'] or '' !!}
<div class="grid">
  @foreach(array_get($blok, 'columns', []) as $blok)
      @include('components/' . $blok['component'], ['blok' => $blok])
  @endforeach
</div>