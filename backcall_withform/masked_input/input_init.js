jQuery(function($){  $.mask.definitions['~']='[12345679]';

        $("input[type='phone']").mask("+380(~9) 999 99 99");
    });