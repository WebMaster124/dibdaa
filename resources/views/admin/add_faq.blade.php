
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Add Faq </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">Add Faq</li>
            </ol>
        </div>
    </div>

    <div class="contentpanel">
        @if(Session::has('message'))
            <div class="alert alert-warning">
                {{ Session::get('message') }}
            </div>
        @endif
        <div class="row">
            <form action="{{ action('FaqController@saveFaq') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">

                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label"> Faq Topics *:</label>
                            <div class="col-sm-6">
                                <select class="form-control" id="sel1" name="category_id">
                                    <option value="1">Listing</option>
                                    <option value="2">Shipping</option>
                                    <option value="3">Stores</option>
                                    <option value="4">Returns</option>
                                    <option value="5">Seller Protection</option>
                                    <option value="6">Buyer</option>
                                    <option value="7">Seller</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Question *:</label>
                            <div class="col-sm-6">
                                <input required value="{{old('question')}}" type="text" class="form-control" id="category_name" placeholder="Enter question" name="question">
                                @if ($errors->has('question'))
                                    <div class="error">{{ $errors->first('question') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Answer *:</label>
                            <div class="col-sm-6">
                                <textarea required class="form-control" rows="5" name="answer"> {{old('answer')}} </textarea>
                                @if ($errors->has('answer'))
                                    <div class="error">{{ $errors->first('answer') }}</div>
                                @endif
                            </div>
                        </div>
                    </div>
                    <div class="panel-footer">
                        <div class="row">
                            <div class="col-sm-12">
                                <button id="submit" class="btn btn-primary">Submit</button>
                                <button type="reset" class="btn btn-default">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!-- row -->
</div>
<!-- contentpanel -->
</div>
<!-- mainpanel -->
<!-- rightpanel -->
</section>
@include('admin.include.footer')

<style>
    div.error{
        color: red;
        display:block !important;
    }
</style>
</body>

</html>
